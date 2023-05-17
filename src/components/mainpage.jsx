import { Link } from "react-router-dom";
import React, { Suspense } from "react";
import EntranceAni from "./transitionAnimation/entranceAni";
import PageSwitchAni from "./transitionAnimation/pageAni";
const Newestposts = React.lazy(() => import("./newestPosts"));

function Mainpage({ isAuth, isFirstMount, user }) {
  return (
    <div className="bg-gray-900 -mt-[5rem] pb-[150rem]">
      {isFirstMount ? <EntranceAni /> : <PageSwitchAni />}
      <div className="h-[100rem]">
        <div className="w-full h-[90vh] bg-cover bg-center bg-balloons bg-fixed"></div>
        {isAuth && user && (
          <div className="w-full justify-end flex pt-10">
            <Link to="/createpost">
              <button className="hover:text-white font-semibold hover:cursor-pointer bg-slate-200 hover:bg-black transition-all duration-[200ms] hover:outline outline-2 outline-white rounded-xl text-2xl px-10 p-2 mr-10">
                Create post
              </button>
            </Link>
          </div>
        )}
        <div className="mt-7 text-white">
          <h1 className="text-5xl ml-20 ">Newest</h1>
        </div>
        <div className="flex text-white mt-10">
          <div className="basis-2/3 ">
            <div className=" grid gap-y-6">
              <Suspense fallback={<div>Loading..</div>}>
                <Newestposts />
              </Suspense>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="mt-8 bg-cover bg-center sticky bg-tower top-0 h-96 w-80">
              sdf
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
