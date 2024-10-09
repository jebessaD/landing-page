// SideBar.jsx
"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// Define a MenuItem component for better organization
const MenuItem = ({ href, label, isActive }) => {
  return (
    <li
      key={href}
      className={`group flex space-x-1 text-neutral-700 ${
        isActive ? "text-[#00FFE6]" : "hover:text-[#00FFE6]"
      }`}
    >
      <div
        className={`w-1.5 ${
          isActive ? "bg-[#00FFE6]" : "bg-neutral-600 group-hover:bg-[#00FFE6]"
        }`}
      />
      <div
        className={`w-0.5 ${
          isActive ? "bg-[#00FFE6]" : "bg-neutral-600 group-hover:bg-[#00FFE6]"
        }`}
      />
      <a
        href={href}
        className={`transition-colors duration-300 ${
          isActive ? "text-[#00FFE6]" : ""
        }`}
        onClick={() => setIsOpen(false)} // Close on click
      >
        {label}
      </a>
    </li>
  );
};

const SideBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Map" },
    { href: "/missions", label: "Missions" },
    { href: "/characters", label: "Characters" },
    { href: "/loadouts", label: "Loadouts" },
    { href: "/events", label: "Events" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <a
        onClick={toggleMenu}
        className="md:hidden ursor-default  flex justify-center items-center  fixed top-6 left-4 z-50 focus:outline-none text-[#00ffe6]"
      >
        {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </a>

      <div
        className={`fixed inset-0 bg-black  duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } md:hidden`}
      />

      <aside
        className={`fixed top-12 left-0 w-44  z-50 md:bg-transparent bg-black bg-opacity-90 p-4 rounded-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:flex md:flex-col items-center terminus-font uppercase text-lg`}
      >
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <MenuItem
              key={item.href}
              {...item}
              isActive={
                pathname === item.href || (item.href === "/" && !pathname)
              }
            />
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default SideBar;
