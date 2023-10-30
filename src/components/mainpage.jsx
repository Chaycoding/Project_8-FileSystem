import { Link } from "react-router-dom";
import React from "react";
import { projectStorage } from "./firebase/config";
import PageSwitchAni from "./transitionAnimation/pageAni";
import { motion } from "framer-motion";
import { ref, listAll, getMetadata, getDownloadURL } from "firebase/storage";

import { useState } from "react";
import { useEffect } from "react";

const storage = projectStorage;

const listRef = ref(storage, "FileStorage/");

function Mainpage() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          setContent((stuff) => [...stuff, itemRef]);
        });
      })
      .catch((error) => {
        console.log(error);
        // Uh-oh, an error occurred!
      });
  }, []);

  const downloadStuff = (itemRef, theName) => {
    const forestRef = ref(storage, itemRef.fullPath);
    getMetadata(forestRef)
      .then(() => {
        getDownloadURL(ref(storage, itemRef.fullPath))
          .then((url) => {
            const xhr = new XMLHttpRequest();
            xhr.responseType = "blob";
            console.log("hey");
            xhr.onload = () => {
              const blob = xhr.response;

              const url = window.URL.createObjectURL(new Blob([blob]));
              const link = document.createElement("a");
              link.href = url;
              link.download = theName;
              link.click();
            };
            xhr.open("GET", url);
            xhr.send();
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
        console.log(error);
      });
  };

  return (
    <div className="bg-gray-900 -mt-[5rem] pb-[150rem]">
      <PageSwitchAni />
      <div className="h-[100rem]">
        <div className="w-full sm:h-[15rem] h-[10rem] bg-balloons bg-cover bg-center flex  justify-center bg-main">
          <div className="mt-20  text-white text-center glass-effect absolute ">
            <h1 className=" sm:text-5xl text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Publish your passions
            </h1>
          </div>
        </div>

        <div className="w-full justify-center sm:justify-end sm:ml-0 ml-5 flex pt-10 ">
          <Link to="/createpost">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="hover:text-white font-semibold hover:cursor-pointer bg-slate-200 hover:bg-black transition-all duration-[200ms] hover:outline outline-2 outline-white rounded-xl text-2xl px-10 p-2 mr-10"
            >
              Add files
            </motion.button>
          </Link>
        </div>

        <div className="mt-7 text-white">
          <h1 className="sm:text-5xl text-2xl sm:ml-20 ml-8 ">Newest</h1>
        </div>
        <div className="flex text-white mt-10">
          <div className=" grid grid-cols-3 gap-x-10 sm:ml-20 gap-y-5 sm:px-0 px-5">
            {content.map((x, i) => {
              const forestRef = ref(storage, x.fullPath);

              let zucc = [];
              getMetadata(forestRef).then((y) => {
                zucc.push(y.size);
              });
              console.log(zucc);

              return (
                <div
                  key={i}
                  className="sm:pb-5 border-white border-2 rounded-xl break-all sm:px-5 sm:pt-10 pt-2 sm:text-lg text-sm text-center"
                >
                  <p>{x.name}</p>
                  <button
                    className="border-white border-2 rounded-md sm:p-2 mt-6 text-md p-1"
                    onClick={() => downloadStuff(x, content[i].name)}
                  >
                    Download
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
