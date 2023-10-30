import React, { useState } from "react";
import PageSwitchAni from "./transitionAnimation/pageAni";
import { ref, getStorage, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";

function Uploadcontent() {
  const [content, setContent] = useState(null);
  const [files, setFiles] = useState(null);
  const [taskState, settaskState] = useState(false);
  const [uploadProgress, setuploadProgress] = useState(0);

  const navigate = useNavigate();
  console.log(content, "no"); //testing the firebase storage

  const submit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const updateItem = (e) => {
    let selected = e.target.files;

    if (selected && files != selected) {
      setFiles(selected);

      const storage = getStorage();

      for (let i = 0; i < selected.length; i++) {
        if (selected[i] != "length") {
          let file = selected[i];

          let storageName = ref(storage, `FileStorage/${file.name}`);

          let taskStat = uploadBytesResumable(storageName, file);
          settaskState(taskStat);
          taskStat.on("state_changed", (snapshot) => {
            setuploadProgress(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
          });
        }
      }
    }
  };
  let colorCheck = uploadProgress == 100 ? "green" : "";
  let style = { width: `${uploadProgress}%`, backgroundColor: colorCheck };

  return (
    <div className="pb-[50rem] mt-20">
      <PageSwitchAni />

      <form
        method="POST"
        id="form"
        onSubmit={(e) => submit(e)}
        className="text-2xl px-36 grid gap-y-10 grid-cols-2"
      >
        <label htmlFor="content">What's your story?</label>
        <textarea
          className="border col-span-2 h-80 border-[#237477] rounded-3xl pl-5 pt-5"
          type="text"
          name="content"
          onChange={(e) => setContent(e.target.value)}
        />

        <label className="hover:cursor-pointer flex justify-center items-center hover:bg-black hover:text-white transition-all duration-[300ms] border border-[#237477] rounded-3xl text-3xl pb-2">
          Upload file
          <input
            type="file"
            multiple="multiple"
            name="content"
            onChange={updateItem}
          />
        </label>
        {taskState == false ? (
          ""
        ) : (
          <div className="w-full rounded-full h-2.5 dark:bg-gray-700 col-span-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                taskState.cancel();
              }}
            >
              Cancel upload
            </button>
            <div className="bg-blue-600 h-2.5 rounded-full" style={style}></div>
          </div>
        )}
        <button className="hover:bg-black hover:text-white text-4xl col-span-2 border border-white hover:border-transparent transition-all duration-[300ms] rounded-r-3xl rounded-l-3xl py-2 px-4 pb-[12px]">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Uploadcontent;
