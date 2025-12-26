import { Brain } from "lucide-react";

const ModelCard = ({ model }) => {
  const { name, framework, dataset, description, image } = model;

  return (
    <div>



        <div className=" bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-blue-400/40 transition-all hover:scale-105 cursor-pointer group">
        
      <img
        src={image}
        alt={name}
        className="w-full h-44 object-cover"
      />

      <div className="p-5 space-y-2">
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
      </div>
    </div>
    </div>
  );
};

export default ModelCard;
