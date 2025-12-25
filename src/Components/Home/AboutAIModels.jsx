import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router";

const AboutAIModels = () => {
  
  const [models, setModels] = useState([]);

  axios.get("AboutModel.json").then((data) => {
    setModels(data.data);
  });
  return (
    <section className="py-12 bg-base-200 my-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Featured AI Models
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model,idx) => (
            <div
              key={idx}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition"
            >
              {/* Fixed size image container */}
              <figure className="h-48 w-full overflow-hidden">
                <img
                  src={model.imageUrl}
                  alt={model.name}
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title flex items-center justify-center">
                  {model.name}
                  <div className="text-sm text-amber-400"> {model.category}</div>
                </h2>

                <p className="text-sm text-primary font-semibold">
                  Framework: {model.framework}
                </p>

                <p className="text-sm text-gray-600">{model.description}</p>

                <div className="card-actions justify-center mt-4">
                 <Link to={'/register'}> <button className="btn btn-primary ">Learn More</button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutAIModels;
