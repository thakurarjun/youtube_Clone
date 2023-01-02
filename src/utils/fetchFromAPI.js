import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  params:{
    "regionCOde":"US",
    "maxResults": "50"
  },
  headers: {
    'X-RapidAPI-Key': '4f777ad0f1msh038546b63ec6eb4p10f0c9jsn8613d9d0ea19',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

  export const fetchFromAPI = async (url) => {
    const {data}  = await axios.get(`${BASE_URL}/${url}`,options
    );
    return data;

  }

  
  
  