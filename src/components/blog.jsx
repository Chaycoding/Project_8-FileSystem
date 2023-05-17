import useFetchBlogs from "./hooks/useFetchBlogs";
import PageSwitchAni from "./transitionAnimation/pageAni";
import { useEffect, useState } from "react";

function Blogpost({ user }) {
  const url = window.location.href;
  const id = url.substring(url.lastIndexOf("/") + 1);
  const { data } = useFetchBlogs(`http://localhost:5000/api/v1/${id}`);

  const useProgressiveImage = (src) => {
    const [sourceLoaded, setSourceLoaded] = useState(null);

    useEffect(() => {
      const img = new Image();
      img.src = src;
      img.onload = () => setSourceLoaded(src);
    }, [src]);

    return sourceLoaded;
  };
  const loaded = useProgressiveImage(data.image);
  return (
    <div className="pb-[100rem] bg-gray-900">
      <PageSwitchAni />
      <div
        className="h-[32rem] rounded-lg -mt-[5rem] flex bg-cover bg-center justify-center"
        style={{
          backgroundImage: `url(${loaded || data.thumbnailImg})`,
        }}
      >
        <h1 className="text-8xl heading h-28 mt-32 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {data.title}
        </h1>
      </div>
      <div className="flex">
        <div className="basis-2/3">
          <div className="flex justify-end text-slate-300 mt-7">
            <p className="mr-10">
              {data.name && "By " + data.name + ","} {data.date}
            </p>
          </div>

          <div className="text-white text-xl leading-10 px-28 mt-20">
            <p className="mt-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque esse consequatur molestias officiis dignissimos qui
              minima iusto ratione ipsam velit. Obcaecati excepturi ab delectus
              mollitia dolorum voluptatem id ducimus veritatis corporis magnam
              voluptas fugit architecto magni molestiae illo recusandae impedit,
              soluta suscipit natus incidunt. Repudiandae, esse excepturi
              delectus earum odit itaque quam inventore tenetur repellat eveniet
              velit ullam minus suscipit ipsum maiores fugiat voluptate
              consequatur. Quo eaque libero amet! Expedita tempore aperiam
              distinctio laboriosam! Molestiae magni doloribus reprehenderit
              ratione fugit, minus atque minima odit nulla expedita
              perspiciatis, tempore ullam assumenda qui, dolore alias. Expedita
              fuga reprehenderit, libero nihil delectus minima dignissimos
              corrupti, repellat possimus quasi blanditiis sunt molestias vel ad
            </p>
            <img
              src={data.image}
              alt=""
              className="w-full mt-28 rounded-2xl mb-28 h-80"
            />
            <p className="mt-10 ">
              officia fugit sequi pariatur eius maiores, laudantium adipisci
              aspernatur architecto magni! Minus tempora veritatis natus
              exercitationem repellendus qui blanditiis aperiam pariatur eius
              recusandae, fuga odit doloribus expedita veniam amet tenetur.
              Fugit ratione est soluta voluptate eaque accusamus vero aperiam
              repellat, nobis consectetur porro culpa nisi inventore expedita
              sit commodi velit, ut iure sed veritatis error. Officiis eos
              labore ullam debitis culpa officia iure eaque similique ratione?
              Laborum labore necessitatibus corrupti inventore ut odit autem
              eaque quidem? Optio officiis omnis provident, minima reiciendis
              ipsam modi incidunt iste a. Ex, vitae asperiores!
            </p>
            <h1 className="text-center text-6xl mt-20">. . .</h1>
          </div>
        </div>
        <div className=" sticky top-0  h-96 grid grid-cols-1 pt-40">
          <img src={user.photoURL} className="h-20 w-20 rounded-full" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Blogpost;
