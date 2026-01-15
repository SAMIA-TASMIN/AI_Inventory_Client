import React from 'react';
import { Rocket, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';




const GetStarted = () => {
 

     return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 md:my-13">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-12 ">
        <section className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-lg rounded-2xl p-8 sm:p-12 border border-purple-400/40 text-center">
          <div className="flex justify-center mb-6">
            <Rocket className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-200 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Join our platform today and start exploring, managing, and deploying cutting-edge AI models. Whether you're a researcher, developer, or AI enthusiast, we have the tools you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={'/register'}>
            <button className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-purple-500/50">
              Register Now
              <ChevronRight className="w-5 h-5" />
            </button>
          </Link>
            <Link to={'/login'}>
            <button className="cursor-pointer bg-white/10 hover:bg-white/20 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-white/30 transition-all hover:scale-105">
              Sign In
            </button>
            </Link>
          </div>
          
          <p className="text-gray-300 text-sm mt-6">
            Start managing AI models in minutes • No credit card required
          </p>
        </section>
      
      </main>

      
    </div>
  );
};

export default GetStarted;


