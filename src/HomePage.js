import React from "react";
import {
  AboutMe,
  GetInTouch,
  Introduction,
  NoteWorthyProjects,
  Projects,
  WorkHistory,
} from "./components";
import { Footer, Navbar, SideBar, SidebarLeft } from "./container";

const HomePage = () => {
  return (
    <div className="overflow-hidden font-sansita">
      <div className="navbar fixed w-full z-50">
        <Navbar />
      </div>

      <div className="sidebarLeft hidden md:contents">
        <SidebarLeft />
      </div>

      <div className="sidebar hidden md:contents">
        <SideBar />
      </div>

      <div className="introduction" data-aos="fade-up" data-aos-duration="3000" id="introduction">
        <Introduction />
      </div>

      <div className="about-me" id="aboutme">
        <AboutMe />
      </div>

      <div
        className="work-history mt-16 h-height550px sm:h-height720px"
        id="experience"
      >
        <WorkHistory />
      </div>

      <div className="projects" id="work">
        <Projects />
      </div>

      <div className="project-two">
        <NoteWorthyProjects />
      </div>

      <div className="getin-touch" id="contact">
        <GetInTouch />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
