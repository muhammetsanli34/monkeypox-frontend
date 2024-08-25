import MobileMenu from "../mobile-menu";
import Link from "next/link";
import useMenuItems from "../../hooks/useMenuItems";
import Image from "next/image";

export default function Navbar() {
  const menuItems = useMenuItems();

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1 className="text-lg font-bold">
            TRACK MONKEY
            <span className="text-bold" style={{ color: "#ca3b3b" }}>
              POX
            </span>
          </h1>
        </Link>
        <div className="hidden justify-around items-center text-sm lg:flex">
          <div className="flex space-x-4">
            {menuItems?.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="no-underline text-black
                  hover:text-primary hover:border-2 hover:border-main cursor-pointer  hover:rounded-md p-2
                  animation duration-300 ease-in-out text-lg font-semibold
                  "
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
        <MobileMenu />
      </div>
    </div>
  );
}
