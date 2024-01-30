"use client"

import React from "react"; 
import NavBar from "@/components/header";
import Footer from "@/components/footer";
import Topbanner from "@/components/home/top-banner";
import Vision from "@/components/home/vision-section";
import PrincipalSection from "@/components/home/principal-section";
import ArticlesSection from "@/components/home/articles-section";
import TimeLineSection from "@/components/home/timeline-section";

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
