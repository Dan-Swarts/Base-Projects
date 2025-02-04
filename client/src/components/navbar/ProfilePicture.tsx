"use client";

import { Link } from "react-router-dom";

export default function ProfilePicture() {
  return (
    <Link to="/" className="flex-shrink-0 flex items-center">
      <img src="favicon-cropped.png" alt="Logo" className="h-10 w-auto" />
    </Link>
  );
}
