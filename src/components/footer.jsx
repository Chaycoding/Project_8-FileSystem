function Footer() {
  return (
    <div className="w-full h-11 pt-10 bg-slate-800">
      <div className="w-full grid grid-cols-3 gap-x-6 h-60 bg-slate-800 pr-10 pl-40 text-white ">
        <div className="border-r-[1px] border-gray-500">
          <p className="font-bold text-xl tracking-wide">About me</p>
          <div className="mt-5 grid grid-cols-1 text-gray-400 gap-y-1">
            <button className="text-lg w-max hover:text-white">
              Personal life
            </button>
            <button className="text-lg w-max hover:text-white">Career</button>
            <button className="text-lg w-max hover:text-white">
              Website origins
            </button>
          </div>
        </div>
        <div className="border-r-[1px] border-gray-500">
          <p className="font-bold text-xl tracking-wide">Sections</p>
          <div className="mt-5 grid grid-cols-1 text-gray-400 gap-y-1">
            <button className="text-lg w-max hover:text-white">Science</button>
            <button className="text-lg w-max hover:text-white">Tech</button>
            <button className="text-lg w-max hover:text-white">Gaming</button>
            <button className="text-lg w-max hover:text-white">Sports</button>
            <button className="text-lg w-max hover:text-white">Updates</button>
          </div>
        </div>
        <div>
          <p>picture</p>
        </div>
      </div>

      <div className="w-full h-20 bg-slate-600">
        <p className="text-center pt-7 text-white text-xl font-semibold">
          &copy; 2023 Chaylogs. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
