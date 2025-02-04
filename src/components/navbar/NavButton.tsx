"use client";

import { Link } from "react-router-dom";
import { ElementType } from "react";
import { useLocation } from "react-router-dom";

export interface NavButtonProps {
  name: string;
  href: string;
  Icon: ElementType;
}

export default function NavButton({ name, href, Icon }: NavButtonProps) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link to={href}>
      <button
        className={`
        relative overflow-hidden group
        bg-gradient-to-r from-purple-500 to-indigo-600
        text-white font-semibold py-2 px-4 rounded-lg
        transition-all duration-300 ease-in-out
        transform hover:scale-105 hover:shadow-lg
        ${isActive ? "border-2 border-white" : ""}
      `}
      >
        <span className="flex items-center justify-center space-x-2">
          <Icon className="w-5 h-5" />
          <span>{name}</span>
        </span>
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </button>
    </Link>
  );
}
