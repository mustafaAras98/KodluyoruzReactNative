import axios from 'axios';
import {useEffect, useState} from 'react';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, SetError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data: responseData} = await axios.get(url);
        setData(responseData);
        setLoading(false);
      } catch (err) {
        SetError(err.message);
        setLoading(false);
      }
    };
    console.log(url);
    fetchData();
  }, [url]);

  return {data, loading, error};
};

export default useFetch;
