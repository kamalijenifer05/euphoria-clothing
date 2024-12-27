"use client"

import Brands from "../Components/brands";
import Cards from "../Components/Cards";
import Banner from "../Components/Banner";
import Arrival from "../Components/Arrival";
import Spotlight from "../Components/Spotlight";
import Men from "../Components/Men";
import Women from "../Components/Women";
import Limelight from "../Components/Limelight";
import Feedback from "../Components/Feedback";

export default function Home() {
  return (
    <>
      <Spotlight/>
      <Cards/>
      <Arrival/>
      <Banner/>
      <Men/>
      <Brands/>
      <Women/>
      <Limelight/>
      <Feedback/>
    </>
  );
}