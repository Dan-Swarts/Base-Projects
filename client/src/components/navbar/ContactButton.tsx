"use client";

import { ElementType } from "react";

export interface ContactButtonProps {
  href: string;
  Icon: ElementType;
}

export default function ContactButton({ href, Icon }: ContactButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        relative overflow-hidden group
        bg-gradient-to-r from-purple-500 to-indigo-600
        text-white font-semibold py-2 px-4 rounded-lg
        transition-all duration-300 ease-in-out
        transform hover:scale-105 hover:shadow-lg hover:border-2"
      aria-label="Email"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}
