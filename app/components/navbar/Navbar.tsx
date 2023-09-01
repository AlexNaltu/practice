"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Container from "../Container";

function Navbar() {
  const [nav, SetNav] = useState(false);

  const handleNav = () => {
    SetNav(!nav);
  };
  return (
    <Container>
      <div className="my-3 md:my-6">
        <div className="flex justify-between items-center">
          <Image
            src="/ab.png"
            alt="/"
            width={50}
            height={50}
          />
          <div className="hidden sm:inline-flex gap-5 items-center text-md">
            <Link
              href="#"
              className="box"
            >
              About Me
            </Link>
            <Link
              href="#skills"
              className="transition hover:text-yellow-600"
            >
              Skills
            </Link>
            <Link
              href=""
              className="transition hover:text-yellow-600"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="transition hover:text-yellow-600"
            >
              Contact
            </Link>
          </div>
          <div className="flex gap-3 items-center">
            <h1 className="hidden md:inline-block">naltuok@gmail.com</h1>
            <Link
              href="/"
              className="transition hover:text-yellow-500"
            >
              <AiFillGithub size={30} />
            </Link>
            <Link
              href="/"
              className="transition hover:text-yellow-500"
            >
              <AiFillLinkedin size={30} />
            </Link>
            <Link
              href="/"
              className="transition hover:text-yellow-500"
            >
              <AiFillInstagram size={30} />
            </Link>
          </div>
          <div
            onClick={handleNav}
            className="block sm:hidden z-10"
          >
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
          <div
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-start w-[40vw] h-full bg-yellow-400 bg-yellow-600/95 p-4 ease-in duration-300 mt-[-1rem]"
                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-start w-[40vw] h-full bg-black  ease-in duration-300"
            }
          >
            <div className="flex flex-col gap-4">
              <Link href="#">About Me</Link>
              <Link href="#">Skills</Link>
              <Link href="#">Projects</Link>
              <Link href="#">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
