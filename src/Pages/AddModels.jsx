import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';


const AddModels = () => {
   
     const handleSubmit = (e) => {
    e.preventDefault();
  
  };
    
      return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Add New AI Model
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Model Name"
            
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="framework"
            placeholder="Framework (TensorFlow, PyTorch)"
            
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="useCase"
            placeholder="Use Case"
           
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="dataset"
            placeholder="Dataset"
           
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            rows="3"
          
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="url"
            name="image"
            placeholder="Image URL"
           
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Add Model
          </button>
        </form>
      </div>
 
    </div>
  );
};

export default AddModels;

;
