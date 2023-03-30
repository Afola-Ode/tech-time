import React from "react";
import { Header, Companies, AboutTalentTime } from "../components";
import Card from "../components/Card/Card";
import Community from "../components/Community/Community";
import Courses from "../components/Courses/Courses";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Companies />
      <AboutTalentTime />
      <Courses />
      <Card/>
      <Community/>
      <FAQ/>
      <Footer/>
    </>
  );
};

export default Home;
