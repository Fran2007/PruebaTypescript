import { useEffect, useState } from "react";


interface apiData {
  artist_name: string;
  url: string;
}

export const useFetch = (url: string) => {
    const [data, setData] = useState<apiData[]>([]);
    const [loading, setLoading] = useState(true);
  
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData((prevData) => [...prevData, ...jsonData.results]);
        setLoading(false);  
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
  
    useEffect(() => {
        fetchData();
      }, []);
    
    return {data, loading, fetchData}
  };