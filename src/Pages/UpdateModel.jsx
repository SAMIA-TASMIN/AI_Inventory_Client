import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateModel = () => {

    const data= useLoaderData()
    const {name,framework,useCase,dataset,description,image,purchased,_id}=data;
         return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Update  Model
        </h2>

        <form  className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Model Name"
            defaultValue={name}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="framework"
            placeholder="Framework (TensorFlow, PyTorch)"
             defaultValue={framework}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="useCase"
            placeholder="Use Case"
            defaultValue={useCase}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="dataset"
            placeholder="Dataset"
            defaultValue={dataset}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            rows="3"
          defaultValue={description}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

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