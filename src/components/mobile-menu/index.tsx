"use client";

import { useState } from "react";
import style from "./style.module.css";
import Link from "next/navigation";
import useLocale from "../../hooks/useLocale";
import useMenuItems from "../../hooks/useMenuItems";
import Locale from "../../types/locale";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const menuItems = useMenuItems((locale as Locale) || "en");
  return (
    <>
      <i
        className="ti ti-menu-2
        text-3xl
        block
        md:hidden
      "
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      ></i>
      {isOpen && (
        <div
          className={`absolute top-0 left-0 h-screen w-8/12 bg-white z-50 shadow-lg ${style.animateSlideInRight}`}
          id="mobile-menu"
        >
          <div className="flex flex-col gap-4 pt-4">
            <Link href="/" className="flex items-center gap-2">
              <img src="logo.png" alt="logo" width={50} />
              <h1 className="text-lg font-bold">
                TRACK MONKEY
                <span className="text-bold" style={{ color: "#ca3b3b" }}>
                  POX
                </span>
              </h1>
            </Link>
            {menuItems?.map((item) => (
              // <a
              //   href={item.link}
              //   className="text-lg
              //   font-semibold
              // "
              //   key={item.text}
              // >
              //   {item.text}
              // </a>
              <Link href={item.link} key={item.text}>
                <a className="text-lg font-semibold">{item.text}</a>
              </Link>
            ))}
          </div>
          <i
            className="ti ti-x text-2xl absolute top-5 right-1"
            onClick={() => setIsOpen(!isOpen)}
          ></i>
        </div>
      )}
    </>
  );
}
