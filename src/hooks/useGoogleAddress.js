import { useState, useEffect } from "react";
import axios from "axios";

const useGoogleAddress = address => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCryQL3VbHp8OdWjMAlSWIKdloWPjTRxy0`
  useEffect(()=>{

    async function fetchData() {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location)}

    fetchData()
  }, [])
  return map;
};

export default useGoogleAddress;