"use client";

import NavButton, { NavButtonProps } from "./buttons/NavButton";
import { User, EqualApproximately, FolderKanban, Plane } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navItems: NavButtonProps[] = [
  { name: "Home", href: "/", Icon: User },
  { name: "About", href: "About", Icon: EqualApproximately },
  { name: "Projects", href: "Projects", Icon: FolderKanban },
  { name: "Journey", href: "Journey", Icon: Plane },
];

export function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div id="logo" className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-800">Logo</span>
            </Link>
          </div>

          <div
            id="nav items"
            className="hidden sm:ml-6 sm:flex sm:items-center"
          >
            {navItems.map((item: NavButtonProps) => (
              <NavButton key={item.href} {...item} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
