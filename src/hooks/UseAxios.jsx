import axios from "axios";

const instance = axios.create({
  baseURL: 'https://ai-theta-ashy.vercel.app/',

});

const UseAxios = () => {
    return instance
};

export default UseAxios;