"use client";
import React from "react";
import ThemeSwitch from "@/components/ThemeSwitch";
import { useTheme } from "next-themes";
import Image from "next/image";
import darkLogo from "@/public/dark/logo.png";
import lightLogo from "@/public/light/logo.png";
import Link from "next/link";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div className="mx-64 flex justify-between py-2 item-center place-items-center">
      <div>
        {theme === "dark" ? (
          <Image src={darkLogo} height={50} width={50} alt="Logo" />
        ) : (
          <Image src={lightLogo} height={50} width={50} alt="Logo" />
        )}
      </div>
      <nav className="py-4 flex gap-4">
        <Link href="/" className="text-sm">
          HOME
        </Link>
        <Link href="/" className="text-sm">
          ABOUT
        </Link>
        <Link href="/" className="text-sm">
          PROJECTS
        </Link>
        <Link href="/" className="text-sm">
          SKILLS
        </Link>
        <Link href="/" className="text-sm">
          EXPERIENCE
        </Link>
        <Link href="/" className="text-sm">
          CONTACT
        </Link>
      </nav>
      <div>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
