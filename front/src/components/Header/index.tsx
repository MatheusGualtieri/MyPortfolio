export const Header = () => {
  return (
    <div className="w-full h-12 flex bg-stone-900 justify-items-center justify-center border-b-2 border-rose-400">
      <div className="px-8 w-full flex justify-between items-center h-full md:px-0 md:max-w-[700px] xl:max-w-[1000px]">
        <div className="">
          <h1 className="text-stone-50">
            My<span className="text-rose-400">Portfolio</span>
          </h1>
        </div>
        <nav className="hidden z-1 text-stone-50 gap-11 md:flex md:z-0">
          <a href="">Sobre Mim</a>
          <a href="">Sobre Mim</a>
          <a href="">Sobre Mim</a>
          <button className="text-stone-50">Dark</button>
        </nav>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 md:hidden md:z-1 text-rose-400 hover:text-rose-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
};
