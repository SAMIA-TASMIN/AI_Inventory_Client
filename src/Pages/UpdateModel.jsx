import React from 'react';
import { useLoaderData } from 'react-router';
import UseAxios from '../hooks/UseAxios';

const UpdateModel = () => {

    const data= useLoaderData()
    const {name,framework,useCase,dataset,description,image,purchased,_id}=data;

    const instance = UseAxios()

    const handleUpdate=e=>{
        e.preventDefault();
      
    }
         return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Update  Model
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">
             <label className="block mb-1 text-sm font-medium text-gray-700">
          Model Name
        </label>
          <input
            type="text"
            name="name"
            placeholder="Model Name"
            defaultValue={name}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
 <label className="block mb-1 text-sm font-medium text-gray-700">
          framework
        </label>
          <input
            type="text"
            name="framework"
            placeholder="Framework (TensorFlow, PyTorch)"
             defaultValue={framework}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
<label className="block mb-1 text-sm font-medium text-gray-700">
          Use Case
        </label>
          <input
            type="text"
            name="useCase"
            placeholder="Use Case"
            defaultValue={useCase}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
<label className="block mb-1 text-sm font-medium text-gray-700">
        Dataset
        </label>
          <input
            type="text"
            name="dataset"
            placeholder="Dataset"
            defaultValue={dataset}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
<label className="block mb-1 text-sm font-medium text-gray-700">
         Description
        </label>
          <textarea
            name="description"
            placeholder="Description"
            rows="3"
          defaultValue={description}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
<label className="block mb-1 text-sm font-medium text-gray-700">
          Image URL
        </label>
          <input
            type="url"
            name="image"
            placeholder="Image URL"
           defaultValue={image}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Edit Model
          </button>
        </form>
      </div>
 
    </div>
  );
};

export default UpdateModel;