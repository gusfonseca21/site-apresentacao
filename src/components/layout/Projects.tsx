import Image from "next/image";
import { useState } from "react";

import { Link } from "react-scroll";

import forkifyPng from "/public/images/forkify.png";
import forkifyGif from "/public/images/forkify.gif";

import classes from "./Projects.module.css";

const Projects = () => {
  const [forkifyImage, setForkifyImage] = useState(forkifyPng);

  const forkifyImageHandler = () => {
    setForkifyImage(forkifyGif);
    // setForkifyImage("/images/forkify.gif");
  };

  const forkifyImageLeaveHandler = () => {
    setForkifyImage(forkifyPng);
    // setForkifyImage("/images/forkify.png");
  };

  return (
    <section className={classes["projects-section"]} id="projects-section">
      <h2 className={classes["section-title"]}>Projetos</h2>
      <div className={classes["projects-div"]}>
        <div className={classes["forkify-div"]}>
          <div className={classes["forkify-image-div"]}>
            <a
              href="https://forkify-mu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={forkifyImage}
                height="400px"
                width="600px"
                alt="Forkify"
                className={classes["forkify-image"]}
                onMouseOver={forkifyImageHandler}
                onMouseLeave={forkifyImageLeaveHandler}
              />
            </a>
          </div>
          <h3 className={classes["project-title"]}>Forkify</h3>
          <p className={classes.paragraph}>
            WebSite que consome uma API, disponibilizando milhares de receitas.
            Criado usando React, Next.js e Typescript. Aplicativo responsivo à
            diversos tamanhos de tela.
          </p>
        </div>
      </div>
      <p className={classes["github-paragraph"]}>
        Para acessar os repositórios de meus projetos e de outras tarefas
        acadêmicas, acesse minha página no{" "}
        <b>
          <Link
            className={classes["github-anchor"]}
            to={"contacts-section"}
            duration={800}
            delay={0}
            smooth={true}
          >
            GitHub
          </Link>
        </b>
        .
      </p>
    </section>
  );
};

export default Projects;
