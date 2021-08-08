import axios from "axios"
export const Movies = type => {
    return axios.create({
      baseURL: `https://www.omdbapi.com/?apikey=7ff821d3&${type}`
    });
  };
  
