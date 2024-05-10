import React from 'react'
import axios from 'axios'
  const url='https://api.openweathermap.org/data/2.5/weather';
  const api_key= 'f33a484cf794d08d0148764789aaba32';
  
  export const fetchData= async(query)=>{
    try {
      const {data}= await axios.get(url, {
        params:{
          q:query,
          units: 'metric',
          APPID:api_key,
  
        }
      })
      return data
    } catch (error) {
      return error.message
    }
   
  }

