import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch(url, {
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error.message));
    };
    getData();
  }, []);
  return data;
};

export default useFetch;
