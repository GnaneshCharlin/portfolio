import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

type Message = {
  id: string;
  type: 'bot' | 'user';
  text: React.ReactNode;
};

const predefinedResponses: Record<string, React.ReactNode> = {
  "Explain projects": (
    <div className="space-y-4 text-sm">
      <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
        <h4 className="font-bold text-primary mb-2">Blindness Assistive Audio Vision System</h4>
        <p><strong>Problem:</strong> Visually impaired users lack real-time environmental awareness.</p>
        <p className="mt-1"><strong>Solution:</strong> AI-based vision + voice system.</p>
        <p className="mt-1"><strong>Features:</strong></p>
        <ul className="list-disc pl-5 space-y-0.5 mt-0.5 text-slate-600 dark:text-slate-400">
          <li>Real-time object detection</li>
          <li>OCR text reading</li>
          <li>Voice navigation</li>
        </ul>
        <p className="mt-2"><strong>Technologies:</strong> Python, OpenCV, Machine Learning, TTS</p>
        <p className="mt-1"><strong>Challenges:</strong> Low latency processing, accuracy in dynamic environments.</p>
        <p className="mt-1"><strong>Impact:</strong> ~200–300ms response time; highly improved accessibility.</p>
        <a href="https://github.com/Madhavan-012004/Blindness-Assistive-Audio-Vision-System" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 mt-2 text-primary hover:underline text-xs font-semibold">🔗 View Source Code →</a>
      </div>

      <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
        <h4 className="font-bold text-secondary mb-2">Smart Athlete Performance Monitoring</h4>
        <p><strong>Problem:</strong> No real-time gym performance tracking.</p>
        <p className="mt-1"><strong>Solution:</strong> IoT-based continuous monitoring system.</p>
        <p className="mt-1"><strong>Features:</strong></p>
        <ul className="list-disc pl-5 space-y-0.5 mt-0.5 text-slate-600 dark:text-slate-400">
          <li>Sensor tracking</li>
          <li>Cloud storage</li>
        </ul>
        <p className="mt-2"><strong>Technologies:</strong> IoT, Python</p>
        <p className="mt-1"><strong>Challenges:</strong> Real-time data handling, sensor accuracy.</p>
        <p className="mt-1"><strong>Impact:</strong> Continuous performance tracking and better analytics.</p>
        <a href="https://github.com/GnaneshCharlin/SMART-ATHLETE-PERFORMANCE-MONITORING-SYSTEM" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 mt-2 text-secondary hover:underline text-xs font-semibold">🔗 View Source Code →</a>
      </div>

      <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
        <h4 className="font-bold text-pink-500 mb-2">GymSense AI</h4>
        <p><strong>Problem:</strong> Lack of personalized fitness guidance.</p>
        <p className="mt-1"><strong>Solution:</strong> AI-powered coaching system.</p>
        <p className="mt-1"><strong>Features:</strong></p>
        <ul className="list-disc pl-5 space-y-0.5 mt-0.5 text-slate-600 dark:text-slate-400">
          <li>Posture detection</li>
          <li>Workout & diet plans</li>
        </ul>
        <p className="mt-2"><strong>Technologies:</strong> React Native, Node.js, MongoDB, Python, OpenCV</p>
        <p className="mt-1"><strong>Challenges:</strong> System integration, accurate posture detection.</p>
        <p className="mt-1"><strong>Impact:</strong> Real-time feedback and improved workout effectiveness.</p>
        <a href="https://github.com/GnaneshCharlin/gymsense-ai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 mt-2 text-pink-500 hover:underline text-xs font-semibold">🔗 View Source Code →</a>
      </div>
    </div>
  ),
  "Show skills": (
    <div className="space-y-3 text-sm">
      <p>I have a diverse set of technical skills categorized as follows:</p>
      <ul className="space-y-3">
        <li>
          <strong>Programming Languages:</strong> Python, Java<br/>
          <span className="text-xs text-slate-500 dark:text-slate-400">Core languages for building robust backend and ML systems.</span>
        </li>
        <li>
          <strong>AI / ML Skills:</strong> OpenCV, Machine Learning<br/>
          <span className="text-xs text-slate-500 dark:text-slate-400">Specialized in building intelligent computer vision applications.</span>
        </li>
        <li>
          <strong>Web Development:</strong> React Native, Node.js, HTML/CSS<br/>
          <span className="text-xs text-slate-500 dark:text-slate-400">Capable of building full-stack applications with modern frameworks.</span>
        </li>
        <li>
          <strong>Tools & Frameworks:</strong> IoT integrations, Cloud Storage, MongoDB<br/>
          <span className="text-xs text-slate-500 dark:text-slate-400">Experienced in hardware integration and scalable data management.</span>
        </li>
      </ul>
    </div>
  ),
  "Suggest roles": (
    <div className="space-y-3 text-sm">
      <p>Based on my strong foundation in machine learning and full-stack development, I am an excellent fit for:</p>
      <ul className="list-disc pl-4 space-y-2 text-slate-700 dark:text-slate-300">
        <li><strong>Computer Vision Engineer:</strong> Deep experience with OpenCV, real-time object detection, and posture analysis models.</li>
        <li><strong>AI / ML Engineer:</strong> Proven track record of deploying intelligent systems like the Assistive Audio Vision System.</li>
        <li><strong>Python Backend Developer:</strong> Extensive experience building scalable backends and integrating complex IoT and AI workflows.</li>
      </ul>
    </div>
  ),
  "Contact details": (
    <div className="space-y-2 text-sm">
      <p>I am actively open to exciting opportunities and professional connections!</p>
      <ul className="space-y-2 mt-2">
        <li className="flex items-center gap-2">
          <span>📧</span> <strong>Email:</strong> <br/><a href="mailto:gnanesh1charlin2@gmail.com" className="text-primary hover:underline break-all">gnanesh1charlin2@gmail.com</a>
        </li>
        <li className="flex items-center gap-2">
          <span>📞</span> <strong>Phone:</strong> <br/><a href="tel:9941245014" className="text-primary hover:underline">+91 9941245014</a>
        </li>
        <li className="flex items-center gap-2">
          <span>💻</span> <strong>GitHub:</strong> <br/><a href="https://github.com/GnaneshCharlin" target="_blank" rel="noreferrer" className="text-primary hover:underline break-all">github.com/GnaneshCharlin</a>
        </li>
      </ul>
      <p className="mt-3 font-medium border-t border-slate-200 dark:border-slate-700 pt-2 text-slate-600 dark:text-slate-400">
        Feel free to reach out via email or phone. I'd love to chat!
      </p>
    </div>
  )
};

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', type: 'bot', text: 'Hi! I am your AI assistant. How can I help you learn more about Gnanesh? You can click the buttons or type a question!' }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleQuery = (query: string) => {
    const userMsg: Message = { id: Date.now().toString(), type: 'user', text: query };
    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      let responseText: React.ReactNode = "I'm sorry, I don't have a specific answer for that. Try asking about my projects, skills, or why you should hire me!";
      const lowerQuery = query.toLowerCase();

      if (predefinedResponses[query]) {
        responseText = predefinedResponses[query];
      } else if (lowerQuery.includes("hire") || lowerQuery.includes("why")) {
        responseText = (
          <div className="space-y-2 text-sm">
            <p><strong>Why you should hire me:</strong></p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Strong foundation in AI & Computer Vision</li>
              <li>Proven ability to build end-to-end full-stack applications</li>
              <li>Fast learner and multiple 1st prize winner</li>
            </ul>
          </div>
        );
      } else if (lowerQuery.includes("project") || lowerQuery.includes("best")) {
        responseText = predefinedResponses["Explain projects"];
      } else if (lowerQuery.includes("strength") || lowerQuery.includes("skill")) {
        responseText = predefinedResponses["Show skills"];
      } else if (lowerQuery.includes("contact") || lowerQuery.includes("reach")) {
        responseText = predefinedResponses["Contact details"];
      }

      const botMsg: Message = { id: (Date.now() + 1).toString(), type: 'bot', text: responseText };
      setMessages(prev => [...prev, botMsg]);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    handleQuery(inputValue);
    setInputValue("");
  };

  return (
    <>
      {/* Bot Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-white shadow-xl flex items-center justify-center hover:bg-primary/90 transition-transform z-50 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-[90vw] md:w-96 max-h-[85vh] flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 z-[100] overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-xs">
                  AI
                </div>
                <div>
                  <h3 className="font-bold text-sm">Virtual Assistant</h3>
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-slate-50 dark:bg-slate-900/50 flex flex-col gap-5 scrollbar-thin">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[95%] p-4 rounded-2xl leading-relaxed ${
                      msg.type === 'user' 
                        ? 'bg-primary text-white rounded-tr-sm' 
                        : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-700 rounded-tl-sm shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
              <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
                {Object.keys(predefinedResponses).map((query) => (
                  <button
                    key={query}
                    onClick={() => handleQuery(query)}
                    className="flex-shrink-0 text-xs font-medium px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    {query}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-200"
              />
              <button type="submit" disabled={!inputValue.trim()} className="bg-primary text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0">
                <Send size={16} className="ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
