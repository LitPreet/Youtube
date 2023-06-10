import axios from "axios";
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {  
  params: {
    hl: 'hi',
    gl: 'IN'
  },
  headers: {
    'X-RapidAPI-Key': `c5437d22e5msh7f258b2d8908f1bp1d51c4jsn1fbdfb7a8779`,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async(url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`,options);
  return data;
}