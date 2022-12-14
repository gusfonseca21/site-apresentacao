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
            Recentemente transicionei da área de História para a programação, onde descobri uma grande paixão pela área de tecnologia, me dedicando integralmente ao
            estudo de ferramentas Front-End. Estou à procura da minha primeira
            experiência profissional na área. Pretendo ampliar, em um futuro
            próximo, meus conhecimentos de desenvolvimento web aprendendo
            tecnologias de Back-End e React Native.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
