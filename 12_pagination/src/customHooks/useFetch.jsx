import { useState, useEffect } from 'react';

const useFetch = (url) => {
  // TTL in milliseconds, default to 5 minutes
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const newData = await response.json();
        setData(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetch;
