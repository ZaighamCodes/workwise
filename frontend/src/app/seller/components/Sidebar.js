"use client";
import { useGlobal } from "@/app/layout";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBoxOpen, FaPlusSquare } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const { setAuthenticated,logout } = useGlobal();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();

  return (
    <div
      className={`flex flex-col h-screen bg-gray-800 text-white ${
        isOpen ? "w-64" : "w-20"
      } duration-300`}
    >
      <button
        className="text-xl p-4 focus:outline-none hover:bg-gray-700 w-fit ml-auto"
        onClick={toggleSidebar}
      >
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </button>
      <div className="mt-4">
        <SidebarItem
          path="/seller/products"
          icon={<FaBoxOpen />}
          label="Products"
          isOpen={isOpen}
        />
        <SidebarItem
          path="/seller/addproducts"
          icon={<FaPlusSquare />}
          label="Add Products"
          isOpen={isOpen}
        />
      </div>
      <div className="button-div mt-10">
        <button
          className="border border-red-700 bg-red-500 flex w-3/4 m-auto items-center justify-center gap-2 text-m p-1"
          onClick={() => logout()}
        >
          <RiLogoutBoxFill className="text-xl" /> {isOpen && "Logout"}
        </button>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, isOpen, path }) {
  return (
    <Link href={path} className="flex items-center p-4 hover:bg-gray-700">
      <div className="text-2xl">{icon}</div>
      {isOpen && <span className="ml-4">{label}</span>}
    </Link>
  );
}
