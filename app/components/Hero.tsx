import React from "react";
import { Lalezar } from "next/font/google";
import { Josefin_Slab } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import Skills from "./Skills";

const josefin = Josefin_Slab({ subsets: ["latin"], weight: "600" });
const lalezar = Lalezar({ subsets: ["latin"], weight: "400" });
const Horizontal = () => {
  return <hr className="w-[90vw] my-2 mx-auto" />;
};

function Hero() {
  return (
    <div className="flex flex-col md:mx-2">
      <Container>
        <div className="flex flex-col items-center md:flex-row justify-center md:items-end">
          <div className="flex flex-col">
            <h1 className={`text-2xl md:text-5xl ${lalezar.className}`}>
              I'm <span className="bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">Alex Naltu</span>
            </h1>
            <div className={`text-sm md:text-xl ${josefin.className}`}>
              <p>I'm a Front End Developer. I'm 18 years old.</p>
              <p>
                Finished 5 months training course at-
                <Link
                  href="https://itschool.ro/"
                  className="text-yellow-800"
                >
                  https://itschool.ro/
                </Link>
                .
              </p>
              <p>
                In these past months I've been learning to code and I really enjoy it,
                <br />
                and now I'm looking for my first job as a Junior Front End Developer.
              </p>
            </div>
          </div>
          <Image
            src="/bee.png"
            alt="/"
            width={500}
            height={400}
          />
        </div>
        <Skills />
      </Container>
    </div>
  );
}

export default Hero;
