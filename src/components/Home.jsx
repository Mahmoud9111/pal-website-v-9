import QA from "./QA";
import Reviews from "./Reviews";
import Hero from "./Hero";
import Bradns from "./Brands";
import ProjectsCard from "./ProjectsCard";
import Facts from "./Facts";
import Bento from "./Bento";
import FooterImg from "./FooterImg";
import Services3 from "./Services3";

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
