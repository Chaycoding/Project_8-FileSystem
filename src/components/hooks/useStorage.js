import { useEffect, useState } from "react";

const useStorage = (file, userName) => {
  const [status, setUrl] = useState(null);

  useEffect(() => {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("userName", userName);

    fetch("http://localhost:5000/api/v1/upload", {
      method: "POST",
      body: formData,
    }).then((data) => {
      setUrl(data.status);
    });
  }, [file, userName]);
  return { status };
};

export default useStorage;
