import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Zap } from 'lucide-react';


const aboutAIModelsData = [
  {
    id: 1,
    name: "Neural Networks",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&q=80",
    howItWorks: "Neural networks consist of interconnected layers of nodes (neurons) that process data. Each connection has a weight that adjusts as learning proceeds, mimicking how human brains recognize patterns.",
    importance: "Foundation of modern AI, enabling machines to learn complex patterns from data without explicit programming.",
    useCases: ["Image Recognition", "Speech Recognition", "Autonomous Vehicles", "Medical Diagnosis"]
  },
  {
    id: 2,
    name: "Natural Language Processing",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&q=80",
    howItWorks: "NLP models analyze text by breaking it into tokens, understanding context through embeddings, and processing sequences using transformers or RNNs to comprehend meaning.",
    importance: "Bridges human communication with machines, making technology more accessible and enabling intelligent text-based interactions.",
    useCases: ["Chatbots & Virtual Assistants", "Language Translation", "Sentiment Analysis", "Content Summarization"]
  },
  {
    id: 3,
    name: "Computer Vision",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=500&q=80",
    howItWorks: "Computer vision models use convolutional neural networks (CNNs) to extract features from images through multiple layers, identifying edges, shapes, and complex objects progressively.",
    importance: "Gives machines the ability to 'see' and interpret visual information, revolutionizing industries from healthcare to security.",
    useCases: ["Facial Recognition", "Object Detection", "Medical Imaging", "Quality Control in Manufacturing"]
  },
  {
    id: 4,
    name: "Recommendation Systems",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
    howItWorks: "These systems analyze user behavior, preferences, and item characteristics using collaborative filtering and content-based methods to predict what users might like.",
    importance: "Personalizes user experiences, increases engagement, and helps users discover relevant content in vast data pools.",
    useCases: ["E-commerce Product Suggestions", "Movie & Music Recommendations", "Content Feeds", "Personalized Advertising"]
  },
  {
    id: 5,
    name: "Reinforcement Learning",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&q=80",
    howItWorks: "Agents learn by interacting with an environment, receiving rewards or penalties for actions. Through trial and error, they develop strategies to maximize cumulative rewards.",
    importance: "Enables autonomous decision-making in complex, dynamic environments without human supervision.",
    useCases: ["Game AI (Chess, Go)", "Robotics Control", "Resource Management", "Trading Strategies"]
  },
  {
    id: 6,
    name: "Generative AI",
    image: "https://images.unsplash.com/photo-1686191128892-64d2c48701dc?w=500&q=80",
    howItWorks: "Generative models learn data distributions and create new content by sampling from learned patterns. GANs use competing networks, while diffusion models gradually denoise random data.",
    importance: "Creates original content, augments human creativity, and generates synthetic data for training other models.",
    useCases: ["Image Generation", "Text Creation", "Music Composition", "Video Synthesis", "Data Augmentation"]
  }
];

const AboutAIModels = () => {
     const [aboutModels, setAboutModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching About AI Models data from MongoDB
    const fetchAboutModels = () => {
      setLoading(true);
      setTimeout(() => {
        setAboutModels(aboutAIModelsData);
        setLoading(false);
      }, 1000);
    };

    fetchAboutModels();
  }, []);
     return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 sm:p-8 md:my-13">
      <section className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">About AI Models</h2>
        </div>
        
        {/* Cards Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden animate-pulse">
                <div className="h-48 bg-white/20"></div>
                <div className="p-6">
                  <div className="h-6 bg-white/20 rounded mb-4"></div>
                  <div className="h-4 bg-white/20 rounded mb-2"></div>
                  <div className="h-4 bg-white/20 rounded mb-2"></div>
                  <div className="h-20 bg-white/20 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {aboutModels.map((model) => (
              <div 
                key={model.id}
                className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-blue-400/40 transition-all hover:scale-105 cursor-pointer group"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={model.image} 
                    alt={model.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Cpu className="w-5 h-5 text-blue-400" />
                    <h3 className="text-lg sm:text-xl font-bold text-white">{model.name}</h3>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-purple-300 mb-1">How It Works:</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{model.howItWorks}</p>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-green-300 mb-1 flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      Importance:
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">{model.importance}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs font-semibold text-yellow-300 mb-2">Use Cases:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {model.useCases.map((useCase, index) => (
                        <span 
                          key={index}
                          className="text-xs px-2 py-1 bg-blue-600/30 text-blue-200 rounded-full border border-blue-400/30"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default AboutAIModels;



