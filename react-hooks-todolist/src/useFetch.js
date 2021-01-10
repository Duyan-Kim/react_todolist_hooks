import React, { useState, useEffect } from "react";

const useFetch = (callback, url) => {
  const [loading, setLoading] = useState(false);

  const fetchingInitialData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const initialData = await response.json();
    callback(initialData);
    setLoading(false);
  };

  useEffect(() => {
    fetchingInitialData();
  }, []);

  return loading;
};

export default useFetch;
