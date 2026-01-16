import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseAxios from '../hooks/UseAxios';
import ModelCard from '../Components/Home/ModelCard';

const AllModels = () => {
  const [models, setModels] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [framework, setFramework] = useState(''); // ✅ শুধু framework filter
  const instance = UseAxios();

  useEffect(() => {
    instance.get('http://localhost:3000/models').then(data => {
      setModels(data.data);
    });
  }, [instance]);

  // ✅ MODIFIED - Search করার পর input clear হবে
  const handleSearch = () => {
    const url = searchTerm 
      ? `http://localhost:3000/models/search?q=${searchTerm}`
      : 'http://localhost:3000/models';
      
    instance.get(url).then(data => {
      setModels(data.data);
      setSearchTerm(''); // ✅ Search এর পর input clear
    });
  };

  // ✅ MODIFIED - শুধু framework filter
  const handleFilter = () => {
    if (!framework) {
      instance.get('http://localhost:3000/models').then(data => {
        setModels(data.data);
      });
      return;
    }

    const url = `http://localhost:3000/models/filter?framework=${framework}`;
    
    instance.get(url).then(data => {
      setModels(data.data);
    });
  };

  // Reset করার জন্য
  const handleReset = () => {
    setSearchTerm('');
    setFramework('');
    instance.get('http://localhost:3000/models').then(data => {
      setModels(data.data);
    });
  };

  return (
    <div className="min-h-screen my-5 py-5 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Search Bar */}
        <div className="mb-4">
          <div className="flex gap-2 max-w-xl mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search models by name..."
              className="flex-1 px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-purple-500"
            />
            <button
              onClick={handleSearch}
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white"
            >
              Search
            </button>
          </div>
        </div>

        {/* ✅ MODIFIED - শুধু Framework Filter */}
        <div className="mb-6 max-w-2xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-3">Filter by Framework</h3>
            
            <div className="flex gap-3">
              <select
                value={framework}
                onChange={(e) => setFramework(e.target.value)}
                className="flex-1 px-4 py-2 rounded bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-purple-500"
              >
                <option value="">All Frameworks</option>
                <option value="TensorFlow">TensorFlow</option>
                <option value="PyTorch">PyTorch</option>
                <option value="Scikit-learn">Scikit-learn</option>
                <option value="Keras">Keras</option>
              </select>

              <button
                onClick={handleFilter}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded text-white"
              >
                Apply
              </button>
              <button
                onClick={handleReset}
                className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded text-white"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {models.length > 0 ? (
            models.map((model) => (
              <ModelCard key={model._id} model={model}></ModelCard>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-slate-400 text-lg">No models found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllModels;