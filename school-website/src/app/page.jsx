"use client"

import React from "react"; 
import NavBar from "@/components/header";
import Footer from "@/components/footer";
import Topbanner from "@/components/home-components/top-banner";
import Vision from "@/components/home-components/vision-section";
import PrincipalSection from "@/components/home-components/principal-section";
import ArticlesSection from "@/components/home-components/articles-section";
import TimeLineSection from "@/components/home-components/timeline-section";

function Home() {
  return (
    <>
      <NavBar />
      <Topbanner />
      <Vision />
      <PrincipalSection/>
      <ArticlesSection />
      <TimeLineSection />
      <Footer />
    </>
  )
}

export default Home;
