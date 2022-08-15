import { useEffect, useState } from "react";

import type { NextPage } from "next";

import Header from "../src/components/layout/Header";
import Welcome from "../src/components/layout/Welcome";

import classes from "../styles/Home.module.css";
import AboutMe from "../src/components/layout/AboutMe";
import Knowledge from "../src/components/layout/Knowledge";
import Projects from "../src/components/layout/Projects";
import Contacts from "../src/components/layout/Contacts";

const Home: NextPage = () => {
  const [showContainer, setShowContainer] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setShowContainer(classes["show"]);
    }, 1 * 1000);
  }, []);


  return (
    <div className={`${classes.container} ${showContainer}`}>
      <Header/>
      <main className={classes.main}>
        <Welcome />
        <AboutMe />
        <Knowledge />
        <Projects />
        <Contacts />
      </main>
    </div>
  );
};

export default Home;
