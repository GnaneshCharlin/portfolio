
import { Navbar } from './components/layout/Navbar';
import { PageLoader } from './components/layout/PageLoader';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { CustomCursor } from './components/layout/CustomCursor';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { AIChatbot } from './components/ui/AIChatbot';
import { WhyHireMe } from './components/sections/WhyHireMe';
import { ImpactMetrics } from './components/sections/ImpactMetrics';

function App() {
  return (
    <div className="min-h-screen relative">
      <PageLoader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        <ImpactMetrics />
        <WhyHireMe />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <AIChatbot />
      
      <footer className="py-6 text-center text-slate-500 text-sm border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
        <p>&copy; {new Date().getFullYear()} Gnanesh Charlin A. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
