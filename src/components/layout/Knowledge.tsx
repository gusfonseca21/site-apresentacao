/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import classes from "./Knowledge.module.css";

const Knowledge = () => {
  return (
    <section className={classes["knowledge-section"]} id="knowledge-section">
      <div className={classes["programming-languages"]}>
        <h2 className={classes["section-title"]}>Conhecimentos</h2>
        <div className={classes["javascript-div"]}>
          <Image
            src="/logos/javascript.svg"
            height="90px"
            width="90px"
            alt="Javascript logo"
            className={classes["javascript-logo"]}
          />
          <p className={classes.paragraph}>
            Javascript: Curso na Udemy "The Complete JavaScript Course
            2022: From Zero to Expert!", de Jonas Schmedtmann. Certificado:{" "}
            <a
              href="/documents/certificado-javascript.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={classes["document-anchor"]}
            >
              <Image
                src="/icons/pdf-icon.svg"
                height="50px"
                width="50px"
                alt="PDF"
              />
            </a>
          </p>
        </div>
        <div className={classes["html-css-div"]}>
          <div className={classes["html-css-logos-div"]}>
            <Image
              src="/logos/html.svg"
              height="90px"
              width="90px"
              alt="HTML logo"
            />
            <Image
              src="/logos/css.svg"
              height="90px"
              width="90px"
              alt="CSS logo"
            />
          </div>
          <p className={classes.paragraph}>
            HTML e CSS: Curso na Udemy "Build Responsive
            Real-World Websites with HTML and CSS", de Jonas Schmedtmann.
            Certificado:{" "}
            <a
              href="/documents/certificado-css-html.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={classes["document-anchor"]}
            >
              <Image
                src="/icons/pdf-icon.svg"
                height="50px"
                width="50px"
                alt="PDF"
              />
            </a>
          </p>
        </div>
        <div className={classes["react-typescript-nextjs-div"]}>
          <div className={classes["reac-typescript-nextjs-logos-div"]}>
            <Image
              src="/logos/react.svg"
              height="90px"
              width="90px"
              alt="React logo"
            />
            <Image
              src="/logos/typescript.svg"
              height="90px"
              width="90px"
              alt="Typescript logo"
            />
            <div className={classes["nextjs-logo-background"]}>
              <Image
                src="/logos/nextjs.svg"
                height="73px"
                width="73px"
                alt="Next.js logo"
                className={classes["nextjs-logo"]}
              />
            </div>
          </div>
          <p className={classes.paragraph}>
            React, TypeScript e Next.js: Curso na Udemy
            "React - The Complete Guide (incl Hooks, React Router, Redux)", de
            Maximilian Schwarzm??ller. Certificado:{" "}
            <a
              href="/documents/certificado-react.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={classes["document-anchor"]}
            >
              <Image
                src="/icons/pdf-icon.svg"
                height="50px"
                width="50px"
                alt="PDF"
              />
            </a>
          </p>
        </div>
        <div className={classes["english-language-div"]}>
          <div className={classes["englis-language-icon"]}>
            <Image
              src="/logos/us_uk_flag.svg"
              height="90px"
              width="140px"
              alt="Mescla de bandeiras dos EUA e do Reino Unido"
            />
          </div>
          <p className={classes.paragraph}>Ingl??s avan??ado;</p>
        </div>
        <div className={classes["other-experiences-div"]}>
          <h3 className={classes["other-experiences-title"]}>
            Outras experi??ncias
          </h3>
          <div className={classes["mpm-logo"]}>
            <Image
              src="/logos/mpm.png"
              height="120px"
              width="120px"
              alt="Logo Minist??rio P??blico Militar"
            />
          </div>
          <p className={classes["mpm-paragraph"]}>
            Como estudante de Hist??ria estagiei durante dois anos no Minist??rio
            P??blico Militar, na ??rea de Mem??ria Institucional, realizando
            atividades de pesquisa documental, elabora????o de artigos sobre a
            hist??ria do Brasil e do MPM, transcri????o e edi????o de entrevistas,
            al??m de outras atividades voltadas para o empreendimento de
            exposi????es e para o evento do centen??rio da institui????o, tendo como
            um de seus resultados o segundo volume do livro "Hist??rias de Vida",
            do qual escrevi o cap??tulo "Metodologia", ditando os procedimentos
            te??ricos e pr??ticos utilizados para a elabora????o da obra.{" "}
            <a
              href="https://memoria.mpm.mp.br/wp-content/uploads/sites/7/2022/03/historias-de-vida_mpm_v.%C2%B42-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={classes["document-anchor"]}
            >
              Link{" "}
            </a>
            para o livro.
          </p>
        </div>
        <p className={`${classes.paragraph} ${classes.download}`}>
          Download do curr??culo:{" "}
          <a
            href="/documents/curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/pdf-icon.svg"
              height="50px"
              width="50px"
              alt="PDF"
            />
          </a>
        </p>
      </div>
    </section>
  );
};

export default Knowledge;
