import { Brain } from "lucide-react";
import { Link } from "react-router";

const ModelCard = ({ model }) => {
  const { name, framework, dataset, description, image,_id } = model;


//   return (
//     <div>
//      <div className= " bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-blue-400/40 transition-all hover:scale-105  group">
//   <img src={image} alt={name} className="w-full h-44 object-cover" />

//   <div className="p-5 space-y-2">
//     <h2 className="text-lg sm:text-xl font-bold text-white">{name}</h2>

//     <p className="text-sm text-gray-300">
//       <span className="font-medium">Framework:</span> {framework}
//     </p>

//     <p className="text-sm text-gray-300">
//       <span className="font-medium">Dataset:</span> {dataset}
//     </p>

//     <p className="text-sm text-white line-clamp-3">{description}</p>

//      <Link to={`/models/${_id}`}> <button className="cursor-pointer w-full mt-4 px-4 py-2 sm:py-2.5 bg-gradient-to-r from-orange-300 to-purple-600 hover:from-blue-300 hover:to-purple-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 active:scale-95">
//     View Details
//     </button>
//     </Link>
//   </div>
// </div>
//     </div>
//   );

return (
  <div className="h-full">
    <div className="h-full bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden 
      border border-white/10 hover:border-blue-400/40 transition-all 
      hover:scale-105 group flex flex-col">

      <img
        src={image}
        alt={name}
        className="w-full h-44 object-cover"
      />

      {/* content */}
      <div className="p-5 flex flex-col flex-1 space-y-2">
        <h2 className="text-lg sm:text-xl font-bold text-white">
          {name}
        </h2>

        <p className="text-sm text-gray-300">
          <span className="font-medium">Framework:</span> {framework}
        </p>

        <p className="text-sm text-gray-300">
          <span className="font-medium">Dataset:</span> {dataset}
        </p>

        <p className="text-sm text-white line-clamp-3">
          {description}
        </p>

        {/* button always bottom */}
        <Link  to={model.modelId ? `/models/${model.modelId}` : `/models/${model._id}`}className="mt-auto">
          <button className="cursor-pointer w-full mt-4 px-4 py-2 sm:py-2.5 
            bg-gradient-to-r from-orange-300 to-purple-600 
            hover:from-blue-300 hover:to-purple-700 
            text-white text-sm sm:text-base font-semibold rounded-lg 
            transition-all duration-300 hover:shadow-lg 
            hover:shadow-blue-500/50 active:scale-95">
            View Details
          </button>
        </Link>
      </div>
    </div>
  </div>
);

};

export default ModelCard;
