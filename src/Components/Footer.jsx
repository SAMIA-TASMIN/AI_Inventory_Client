import { Github, Mail, Linkedin, Code } from 'lucide-react';
import { Link } from 'react-router';

const Footer = () => {
 return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="w-8 h-8 text-blue-500" />
              <img src="" alt="" />
              <span className="text-2xl font-bold text-white">BrainWave AI</span>
            </div>
            <p className="text-sm text-gray-400">
              Building amazing digital experiences with cutting-edge technology and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to={`/`}><span className="cursor-pointer text-sm text-gray-400  hover:text-blue-400 transition-colors">Home</span></Link>
              </li>
              <li>
                <span className="text-sm text-gray-400  hover:text-blue-400 transition-colors">About</span>
              </li>
              <li>
                <span className="text-sm text-gray-400  hover:text-blue-400 transition-colors">Services</span>
              </li>
              <li>
                <span className="text-sm text-gray-400  hover:text-blue-400 transition-colors">Contact</span>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-gray-400  hover:text-blue-400 transition-colors">Documentation</span>
              </li>
              <li>
                <span className="text-sm text-gray-400  hover:text-blue-400 transition-colors">Blog</span>
              </li>
              <li>
                <span className="text-sm text-gray-400  hover:text-blue-400 transition-colors">Support</span>
              </li>
              <li>
                <span className="text-sm text-gray-400  hover:text-blue-400 transition-colors">FAQ</span>
              </li>
            </ul>
          </div>

          {/* GitHub Repositories */}
          <div>
            <h3 className="text-white font-semibold mb-4">GitHub Repos</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/yourusername/frontend-repo" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-blue-400 transition-colors flex items-center space-x-2"
                >
                  <Github className="w-4 h-4" />
                  <span>Frontend Repo</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/SAMIA-TASMIN/AI_Inventory_Management_Server" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-blue-400 transition-colors flex items-center space-x-2"
                >
                  <Github className="w-4 h-4" />
                  <span>Backend Repo</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/yourusername/mobile-repo" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-blue-400 transition-colors flex items-center space-x-2"
                >
                  <Github className="w-4 h-4" />
                  <span>Mobile App Repo</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} <span className="text-white font-semibold">BrainWave AI</span>. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a 
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://x.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="X (formerly Twitter)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex space-x-4 text-sm">
            <span className="text-gray-400">Privacy Policy</span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import { Github, Mail, Linkedin, Code } from 'lucide-react';

// export default function ResponsiveFooter() {
 
// }
