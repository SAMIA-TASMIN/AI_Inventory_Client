// import React, { use } from "react";
// import { Link, useLoaderData, useNavigate } from "react-router";
// import { AuthContext } from "../contexts/AuthContext";
// import UseAxios from "../hooks/UseAxios";
// import { toast } from "react-toastify";

// const ViewDetails = () => {
//   const navigate = useNavigate();
//   const instance = UseAxios();
//   const data = useLoaderData();
//   console.log(data,"data pacchi?");
//   const { user } = use(AuthContext);
//   const loggedInUser = user?.email;

//   const {
//     name,
//     framework,
//     useCase,
//     dataset,
//     description,
//     image,
//     purchased,
//     _id,
//     createdBy,
//   } = data;

//   const handleDelete = () => {
//     instance.delete(`/models/${_id}`).then((data) => {
//       if (data.data.deletedCount) {
//         toast.success("Successfully Model Deleted");
//         navigate("/models");
//       } else {
//         toast.error("Not Deleted");
//       }
//     });
//   };

//   const handlePurchase = () => {
//     const newPurchasedModel = {
//       name,
//       framework,
//       useCase,
//       dataset,
//       description,
//       image,
//       purchased,
//       modelId: _id,
//       createdBy:loggedInUser
//     };

//     instance.post(`/purchasedModel`, newPurchasedModel).then((data) => {
//       if (data.data.insertedId) {
//         toast.success("Purchased Successfully");
//       }
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4 sm:p-6">
//       <div className="max-w-3xl mx-auto">
//         <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 shadow-xl">
          
//           {/* Image Section */}
//           <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
//             <img
//               src={image}
//               alt={name}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
//               <p className="text-white text-xs font-medium">
//                 Purchased {purchased} times
//               </p>
//             </div>
//           </div>

       
//           <div className="p-4 sm:p-6 lg:p-8">
           
//             <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
//               {name}
//             </h1>

           
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
//               <div>
//                 <p className="text-gray-400 text-xs font-medium">Framework</p>
//                 <p className="text-white text-sm sm:text-base font-semibold">
//                   {framework}
//                 </p>
//               </div>

//               <div>
//                 <p className="text-gray-400 text-xs font-medium">Use Case</p>
//                 <p className="text-white text-sm sm:text-base font-semibold">
//                   {useCase}
//                 </p>
//               </div>

//               <div className="sm:col-span-2">
//                 <p className="text-gray-400 text-xs font-medium">Dataset</p>
//                 <p className="text-white text-sm sm:text-base font-semibold">
//                   {dataset}
//                 </p>
//               </div>
//             </div>

          
//             <div className="mb-5">
//               <p className="text-gray-400 text-xs font-medium mb-1">
//                 Description
//               </p>
//               <p className="text-gray-200 text-sm leading-relaxed">
//                 {description}
//               </p>
//             </div>

     
//             <div className="flex flex-col sm:flex-row gap-3">
//               <button
//                 onClick={handlePurchase}
//                 className="cursor-pointer flex-1 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all active:scale-95"
//               >
//                 Purchase Model
//               </button>

//               {loggedInUser === createdBy && (
//                 <>
//                   <Link to={`/update-model/${_id}`}>
//                     <button className="cursor-pointer px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm sm:text-base font-semibold rounded-lg transition-all active:scale-95">
//                       Edit
//                     </button>
//                   </Link>

//                   <button
//                     onClick={handleDelete}
//                     className="cursor-pointer px-4 py-2.5 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 text-red-300 hover:text-red-200 text-sm sm:text-base font-semibold rounded-lg transition-all active:scale-95"
//                   >
//                     Delete
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewDetails;

import React, { use, useState } from "react"; // ✅ MODIFIED - useState import করা হয়েছে
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import UseAxios from "../hooks/UseAxios";
import { toast } from "react-toastify";

const ViewDetails = () => {
  const navigate = useNavigate();
  const instance = UseAxios();
  const data = useLoaderData();
  console.log(data, "data pacchi?");
  const { user } = use(AuthContext);
  const loggedInUser = user?.email;

  // ✅ NEW - State for real-time purchased count যোগ করতে হবে
  const [purchasedCount, setPurchasedCount] = useState(data.purchased || 0);

  const {
    name,
    framework,
    useCase,
    dataset,
    description,
    image,
    _id,
    createdBy,
  } = data;

  const handleDelete = () => {
    instance.delete(`/models/${_id}`).then((data) => {
      if (data.data.deletedCount) {
        toast.success("Successfully Model Deleted");
        navigate("/models");
      } else {
        toast.error("Not Deleted");
      }
    });
  };

  // ✅ MODIFIED - handlePurchase function সম্পূর্ণ পরিবর্তন করতে হবে
  const handlePurchase = () => {
    const newPurchasedModel = {
      name,
      framework,
      useCase,
      dataset,
      description,
      image,
      purchased: purchasedCount,
      createdBy: loggedInUser,
    };

    // First, save to purchased collection
    instance.post(`/purchasedModel`, newPurchasedModel).then((data) => {
      if (data.data.insertedId) {
        // Then, increment the purchase counter
        const updatedData = {
          $inc: { purchased: 1 }
        };
        
        instance.patch(`/models/${_id}`, updatedData).then((response) => {
          if (response.data.modifiedCount) {
            // Update UI with new count
            setPurchasedCount(purchasedCount + 1);
            toast.success("Purchased Successfully");
          }
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 shadow-xl">
          
          <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
              {/* ✅ MODIFIED - purchased এর জায়গায় purchasedCount ব্যবহার করতে হবে */}
              <p className="text-white text-xs font-medium">
                Purchased {purchasedCount} times
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
              {name}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
              <div>
                <p className="text-gray-400 text-xs font-medium">Framework</p>
                <p className="text-white text-sm sm:text-base font-semibold">
                  {framework}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-xs font-medium">Use Case</p>
                <p className="text-white text-sm sm:text-base font-semibold">
                  {useCase}
                </p>
              </div>

              <div className="sm:col-span-2">
                <p className="text-gray-400 text-xs font-medium">Dataset</p>
                <p className="text-white text-sm sm:text-base font-semibold">
                  {dataset}
                </p>
              </div>
            </div>

            <div className="mb-5">
              <p className="text-gray-400 text-xs font-medium mb-1">
                Description
              </p>
              <p className="text-gray-200 text-sm leading-relaxed">
                {description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handlePurchase}
                className="cursor-pointer flex-1 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all active:scale-95"
              >
                Purchase Model
              </button>

              {loggedInUser === createdBy && (
                <>
                  <Link to={`/update-model/${_id}`}>
                    <button className="cursor-pointer px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm sm:text-base font-semibold rounded-lg transition-all active:scale-95">
                      Edit
                    </button>
                  </Link>

                  <button
                    onClick={handleDelete}
                    className="cursor-pointer px-4 py-2.5 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 text-red-300 hover:text-red-200 text-sm sm:text-base font-semibold rounded-lg transition-all active:scale-95"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;