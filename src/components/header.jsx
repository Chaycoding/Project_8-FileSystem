import { Link } from "react-router-dom";
import { useScrollPosition } from "./hooks/useScrollPosition";
import { RiBearSmileFill } from "react-icons/ri";

function Header({ isAuth, button, user }) {
  const scrollPosition = useScrollPosition();
  const scrollColour = scrollPosition > 0 ? "anicol" : "aniRevcol ";
  const scrollHeader = `sticky top-0 z-10 duration-[1s] transition-all ${scrollColour}`;

  return (
    <div className={scrollHeader}>
      <div className="w-full h-20 hidden items-end sm:flex ">
        <div className="font-[Open Sans] text-white basis-5/6">
          <Link to="/">
            <button className="ml-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mb-5 font-semibold ">
              <RiBearSmileFill className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] inline-block text-4xl -mt-3" />
              <span className="text-3xl ml-2 ">Chaytuff files</span>
            </button>
          </Link>
        </div>
        <div className="font-[Open Sans] text-white basis-1/6">
          {isAuth === true && user ? (
            <div className="mb-2 -ml-28 flex h-[5rem] items-center justify-end">
              <img
                src={user.photoURL}
                alt="profile pic"
                referrerPolicy="no-referrer"
                className="rounded-full h-10 mt-3 mr-3 w-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              />
              <Link to="/userProfile">
                <button className="text-[25px] mt-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] pr-5">
                  {user.displayName}
                </button>
              </Link>
              <button
                className="text-[25px] mt-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:outline rounded-lg p-2 mr-5 transition-all font-semibold"
                onClick={button}
              >
                Log out
              </button>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button className="text-[25px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ml-10 hover:outline rounded-lg p-2 transition-all font-semibold">
                  Sign in
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="sm:hidden text-white text-center -ml-8 pt-2">
        <Link to="/">
          <button className="ml-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mb-5 font-semibold ">
            <RiBearSmileFill className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] inline-block text-4xl -mt-3" />
            <span className="text-2xl ml-2 ">Chaytuff</span>
          </button>
        </Link>
        <Link to="/login">
          <button className="text-[22px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ml-10 hover:outline rounded-lg p-2 transition-all font-semibold">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
