import React from "react";
import { Header, Companies, AboutTalentTime } from "../components";
import Community from "../components/Community/Community";
import Courses from "../components/Courses/Courses";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import Testimonials from "../components/Testimonial/Testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <Companies />
      <AboutTalentTime />
      <Courses />
      <Testimonials/>
      <Community/>
      <FAQ/>
      <Footer/>
    </>
  );
};

export default Home;
