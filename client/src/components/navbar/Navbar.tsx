"use client";

import NavButton, { NavButtonProps } from "./NavButton";
import ContactButton, { ContactButtonProps } from "./ContactButton";
import ProfilePicture from "./ProfilePicture";
import {
  User,
  EqualApproximately,
  FolderKanban,
  Plane,
  Linkedin,
  Github,
  Mails,
  MessageCircle,
} from "lucide-react";

const navItems: NavButtonProps[] = [
  { name: "Home", href: "/", Icon: User },
  { name: "About", href: "/About", Icon: EqualApproximately },
  { name: "Conversation", href: "/Conversation", Icon: MessageCircle },
  { name: "Projects", href: "/Projects", Icon: FolderKanban },
  { name: "Journey", href: "/Journey", Icon: Plane },
];

const contactItems: ContactButtonProps[] = [
  { href: "https://www.linkedin.com/in/daniel-swarts/", Icon: Linkedin },
  { href: "https://github.com/Dan-Swarts", Icon: Github },
  { href: "mailto:danstraws@gmail.com", Icon: Mails },
];

export default function Navbar() {
  return (
    <nav className="bg-black text-white shadow-md sticky top-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div id="profile-headshot" className="flex-shrink-0">
            <ProfilePicture />
          </div>

          <div
            id="nav-items"
            className="hidden sm:flex sm:items-center sm:space-x-8"
          >
            {navItems.map((item: NavButtonProps) => (
              <NavButton key={item.href} {...item} />
            ))}
          </div>

          <div id="contact" className="flex items-center space-x-6">
            {contactItems.map((item: ContactButtonProps) => (
              <ContactButton key={item.href} {...item} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
