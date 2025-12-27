import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';


const AddModels = () => {
    const ki = use(AuthContext)
    console.log(ki);
    return (
        <div>
           add models 
        </div>
    );
};

export default AddModels;