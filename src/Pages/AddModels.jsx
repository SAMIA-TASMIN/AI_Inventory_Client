import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";

const AddModels = () => {

const {user}= use(AuthContext)
const createdBy = user.email;


  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const framework = e.target.framework.value;
    const useCase = e.target.useCase.value;
    const dataset = e.target.dataset.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    // const createdBy = e.target.createdBy.value;

    const newModel = {
      name,
      framework,
      useCase,
      dataset,
      description,
      image,
      createdBy
    };
    console.log(newModel);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Add New AI Model
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Model Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Model Name"
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
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Test Cases
          </label>
          <input
            type="text"
            name="useCase"
            placeholder="Use Case"
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
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {/* <label className="block mb-1 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            name="createdBy"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          /> */}
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Description"
            rows="3"
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
