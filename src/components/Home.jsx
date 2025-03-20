import React from "react";
import { Building2, ArrowUpRight } from "lucide-react";
import Earth from "./Earth";
import PropertyListing from "./PropertyListing";
import QA from "./QA";
import Footer from "./Footer";
import Slider from "./Slider";
import Reviews from "./reviews";
import Hero from "./Hero";
import Bradns from "./brands";
import ProjectsCard from "./ProjectsCard";
import Services from "./Services";
import Facts from "./Facts";
import Bento from "./Bento";
import FooterImg from "./footerImg";
import Services2 from "./Services2";
import Services3 from "./services3";
export default function Home() {
  return (
    <>
      <Hero/>
      <Bradns/>
      <Services3/>
      <Bento/>
      <ProjectsCard/>   
      <Reviews/>    
      <Facts/>
      <QA />

      <FooterImg/>

    </>
  );
}
