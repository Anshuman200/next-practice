import Image from "next/image";
import Hero from "./(home)/modules/Hero";
import MyFocus from "./(home)/modules/MyFocus";
import MyWork from "./(home)/modules/MyWork";
import Contact from "./(home)/modules/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <MyFocus />
      <MyWork />
      <Contact />
    </>
  );
}
