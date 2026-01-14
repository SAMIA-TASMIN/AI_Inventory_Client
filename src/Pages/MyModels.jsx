import React, { use, useEffect, useState } from 'react';
import UseAxios from '../hooks/UseAxios';
import { AuthContext } from '../contexts/AuthContext';
import ModelCard from '../Components/Home/ModelCard';
import { Brain } from 'lucide-react';

const MyModels = () => {
    const instance = UseAxios()
    const {user}= use(AuthContext)
   const [models,setModels]=useState([])

   useEffect(()=>{
     instance.get(`/mymodel?email=${user.email}`).then(data=>{
      setModels(data.data);
    })
   },[])
    
 return (
    <div className="min-h-screen my-10 py-5 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 sm:p-8">
     <div className="max-w-7xl mx-auto">
    
         <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          My  Models
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {models.map((model) => (
          <ModelCard key={model._id} model={model}></ModelCard>
        ))}
      </div>
     </div>
    </div>
  );
};

export default MyModels;