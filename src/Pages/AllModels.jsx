import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseAxios from '../hooks/UseAxios';
import ModelCard from '../Components/Home/ModelCard';

const AllModels = () => {

     const [models, setModels] = useState([]);
  const instance = UseAxios();
    useEffect(()=>{
        instance.get('http://localhost:3000/models').then(data=>{
           
            setModels(data.data)
        })
    },[instance])
    return (
    <div className="min-h-screen my-5 py-5 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 sm:p-8">
     <div className="max-w-7xl mx-auto">
    
         
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {models.map((model) => (
          <ModelCard key={model._id} model={model}></ModelCard>
        ))}
      </div>
     </div>
    </div>
  );
};

export default AllModels;