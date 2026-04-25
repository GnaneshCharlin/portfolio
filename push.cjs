const git = require('isomorphic-git')
const http = require('isomorphic-git/http/node')
const fs = require('fs')
const path = require('path')

const dir = process.cwd()
const url = 'https://github.com/GnaneshCharlin/Portfolio.git'
const username = 'GnaneshCharlin'
const token = ''

async function push() {
  console.log('Initializing repository...')
  try {
    await git.init({ fs, dir, defaultBranch: 'main' })

    // Get all files recursively except node_modules, dist, .git
    function getFiles(directory) {
      const results = []
      const list = fs.readdirSync(directory)
      for (const file of list) {
        const filePath = path.join(directory, file)
        const stat = fs.statSync(filePath)
        if (stat && stat.isDirectory()) {
          if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
            results.push(...getFiles(filePath))
          }
        } else {
          results.push(path.relative(dir, filePath).replace(/\\/g, '/'))
        }
      }
      return results
    }

    const allFiles = getFiles(dir)
    console.log(`Staging ${allFiles.length} files...`)
    for (const file of allFiles) {
      await git.add({ fs, dir, filepath: file })
    }

    console.log('Committing...')
    await git.commit({
      fs,
      dir,
      author: {
        name: 'Gnanesh Charlin',
        email: 'gnanesh1charlin2@gmail.com'
      },
      message: 'Initial commit: Portfolio with Netlify config'
    })

    console.log('Adding remote...')
    try {
      await git.addRemote({ fs, dir, remote: 'origin', url: url })
    } catch (e) {
      // Remote might already exist
      console.log('Remote already set.')
    }

    console.log('Pushing to GitHub...')
    const result = await git.push({
      fs,
      http,
      dir,
      remote: 'origin',
      ref: 'main',
      url: url,
      force: true,
      onAuth: () => ({ username: username, password: token })
    })

    console.log('Push result:', JSON.stringify(result))
    console.log('\n✅ Push successful! Your code is now on GitHub.')
  } catch (err) {
    console.error('Error:', err.message)
    console.error(err)
  }
}

push()
