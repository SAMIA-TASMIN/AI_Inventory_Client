import React from 'react';

const ViewDetails = () => {
     const modelData = {
    name: "YOLOv8 Object Detection",
    framework: "PyTorch",
    useCase: "Real-time Object Detection",
    dataset: "COCO Dataset",
    description: "Advanced object detection model based on YOLOv8 architecture. Capable of detecting 80 different object classes in real-time with high accuracy. Perfect for surveillance, autonomous vehicles, and industrial automation applications.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=400&fit=crop",
    purchasedCount: 3
  };

  const handleEdit = () => {
    console.log("Edit clicked");
  };

  const handleDelete = () => {
    console.log("Delete clicked");
  };

  const handlePurchase = () => {
    console.log("Purchase clicked");
  };
     return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
          {/* Image Section */}
          <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
            <img 
              src={modelData.image} 
              alt={modelData.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <p className="text-white text-sm font-medium">
                Purchased {modelData.purchasedCount} times
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              {modelData.name}
            </h1>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div className="space-y-1">
                <p className="text-gray-400 text-sm font-medium">Framework</p>
                <p className="text-white text-base sm:text-lg font-semibold">
                  {modelData.framework}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-gray-400 text-sm font-medium">Use Case</p>
                <p className="text-white text-base sm:text-lg font-semibold">
                  {modelData.useCase}
                </p>
              </div>

              <div className="space-y-1 sm:col-span-2">
                <p className="text-gray-400 text-sm font-medium">Dataset</p>
                <p className="text-white text-base sm:text-lg font-semibold">
                  {modelData.dataset}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-400 text-sm font-medium mb-2">Description</p>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                {modelData.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* Purchase Button */}
              <button 
                onClick={handlePurchase}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 active:scale-95"
              >
                Purchase Model
              </button>

              {/* Edit Button */}
              <button 
                onClick={handleEdit}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-base font-semibold rounded-lg transition-all duration-300 active:scale-95"
              >
                Edit
              </button>

              {/* Delete Button */}
              <button 
                onClick={handleDelete}
                className="px-6 py-3 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 text-red-300 hover:text-red-200 text-base font-semibold rounded-lg transition-all duration-300 active:scale-95"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;


