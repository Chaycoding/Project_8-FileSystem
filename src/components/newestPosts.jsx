import { Link } from "react-router-dom";
import img from "./images/high quality/bal.webp";
import useFetchBlogs from "./hooks/useFetchBlogs";
import { useEffect, useState } from "react";

function Newestposts() {
  const { data } = useFetchBlogs("http://localhost:5000/api/v1/blogOverview");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (data.length !== 0) {
      setLoading(false);
    }
  }, [data]);

  const content = !isLoading ? (
    data.map((x) => {
      const link = `/post/${x.id}`;
      return (
        <div
          className="grid mt-10 grid-cols-2 gap-2 mx-20 hover:outline-1 hover:outline hover:outline-blue-400 rounded-lg "
          key={x._id}
        >
          <div>
            <img
              className="h-40 rounded-lg w-[70%]"
              loading="lazy"
              src={x.thumbnailImg || img}
              alt="Something went wrong"
            ></img>
          </div>

          <Link className="hover:cursor-pointer " to={link}>
            <div className="flex flex-col">
              <p className="text-2xl font-semibold mt-5 -ml-10">{x.title}</p>

              <div className="flex mt-[4rem] ml-44 items-center">
                <img
                  src={"https://picsum.photos/20"}
                  alt=""
                  loading="lazy"
                  className="rounded-full h-7 w-7"
                />
                <p className="text-lg ml-2">By {x.name}</p>
              </div>
            </div>
          </Link>
        </div>
      );
    })
  ) : (
    <h1 className="text-center mt-28 text-6xl">Loading..</h1>
  );

  return <div>{content}</div>;
}

export default Newestposts;
