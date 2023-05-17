import React from "react";
import { useEffect } from "react";
import useStorage from "./hooks/useStorage";

function Progressbar({ file, userName, setimgurl, imageUrl }) {
  const { status } = useStorage(file, userName);

  useEffect(() => {
    const imageName =
      status == 200
        ? "Images/" +
          file.name.split(".")[0] +
          " " +
          userName +
          " " +
          new Date().toJSON().slice(0, 10) +
          ".webp"
        : "null";
    const imageNameThumb =
      status == 200
        ? "Images/" +
          file.name.split(".")[0] +
          " " +
          userName +
          " " +
          new Date().toJSON().slice(0, 10) +
          "thumb .webp"
        : "null";
    setimgurl({
      mainImg: imageName,
      thumbnailImg: imageNameThumb,
    });
  }, [status, userName, file.name, setimgurl]);

  const style = imageUrl ? "" : "hidden";

  return (
    <div>
      <div className="flex h-14 w-14 items-center border border-black justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
        <div className="h-9 w-9 rounded-full bg-white"></div>
      </div>

      <div className={style}>It's completed</div>
    </div>
  );
}

export default Progressbar;
