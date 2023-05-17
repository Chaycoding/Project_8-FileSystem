import { useState, useEffect } from "react";

const useFetchBlogs = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json["blogs"]))
      .catch((error) => console.log(error));
  }, [url]);

  return { data };
};

export default useFetchBlogs;
