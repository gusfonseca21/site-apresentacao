import Image from "next/image";

import classes from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={classes["about-me-section"]} id="about-me-section">
      <h2 className={classes["section-title"]}>Sobre mim</h2>
      <div className={classes["image-and-text"]}>
        <div className={classes.image}>
          <Image
            src="/images/perfil.jpg"
              height="270px"
              width="270px"
            alt="Foto de Gustavo Fonseca"
            className={classes["image-photo"]}
          />
        </div>
        <div className={classes.text}>
          <p>
            Me chamo Gustavo Fonseca de Araújo, tenho 27 anos e moro em
            Brasília, Distrito Federal.
          </p>
          <p>
            No início de 2022 transicionei da área de História, enquanto
            estudante da UnB, para a programação, me dedicando integralmente ao
            estudo de tecnologias Front-End. Estou à procura da minha primeira experiência profissional na área. Pretendo ampliar, em um futuro próximo, meus conhecimentos de desenvolvimento web aprendendo tecnologias de Back-End, React Native, Sass e algum framework de estilização como Bootstrap, Tailwind, etc.
          </p>
          <p>
            
          </p>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
