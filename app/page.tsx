import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import { SiteBlob } from "./components/SiteBlob";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div>
      <SiteBlob />
      <Navbar />
      <Hero />
    </div>
  );
}
