import Image from "next/image";
import Hero from "./components/Homepage/Hero";
import About from "./components/Homepage/About";
import Features from "./components/Homepage/Features";
import WhyNebula from "./components/Homepage/WhyNebula";
import Promise from "./components/Homepage/Promise";
import AI from "./components/Homepage/AI";
import Background from "./components/Background";
import Startups from "./components/Homepage/Startups";
import Retail from "./components/Homepage/Retail";
import Working from "./components/Homepage/Working";
import Contact from "./components/Contactus/Contact";
import NonRetail from "./components/Homepage/NonRetail";
import Team from "./components/Homepage/Team";

export default function Home() {
  return (
    <div>
      <Background />
      <About />
      {/* <Features/> */}
      {/* <Promise/> */}
      <Working/>
      {/* <WhyNebula /> */}
      <Retail/>
      <NonRetail/>
      <Startups/>
      <Team/>
    

    </div>
  );
}
