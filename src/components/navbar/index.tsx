import { Link } from "react-router-dom";
import MobileMenu from "../mobile-menu";

export default function Navbar() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="logo.png" alt="logo" width={50} />
          <h1 className="text-lg font-bold">
            TRACK MONKEY
            <span className="text-bold" style={{ color: "#ca3b3b" }}>
              POX
            </span>
          </h1>
        </Link>
        <div className="hidden justify-around items-center text-sm lg:flex">
          <div className="flex space-x-4">
            <Link
              to="/"
              className="no-underline text-black
            hover:text-primary hover:border-2 hover:border-main cursor-pointer  hover:rounded-md p-2
            animation duration-300 ease-in-out text-lg font-semibold
            "
            >
              CANLI VERİ
            </Link>
            <Link
              to="/belirtiler"
              className="no-underline text-black
            hover:text-primary hover:border-2 hover:border-main cursor-pointer  hover:rounded-md p-2
            animation duration-300 ease-in-out text-lg font-semibold
            "
            >
              BELİRTİLER
            </Link>
            <Link
              to="/maymun-cicegi"
              className="no-underline text-black
            hover:text-primary hover:border-2 hover:border-main cursor-pointer  hover:rounded-md p-2
            animation duration-300 ease-in-out text-lg font-semibold
            "
            >
              MAYMUN ÇİÇEĞİ
            </Link>
          </div>
        </div>
        <MobileMenu />
      </div>
    </div>
  );
}
