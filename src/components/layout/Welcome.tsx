import { useEffect, useState } from "react";

import classes from "./Welcome.module.css";

const Welcome = () => {
  const [showTitle, setShowTitle] = useState("");
  const [showParagraph, setShowParagraph] = useState("");

  //  Animação fade in na entrada do site
  useEffect(() => {
    setTimeout(() => {
      setShowTitle(classes["show"]);
    }, 2.5 * 1000);
    setTimeout(() => {
      setShowParagraph(classes["show"]);
    }, 4.5 * 1000);
  }, []);
  return (
    <section className={classes["welcome-section"]} id="welcome-section">
      <h1 className={`${classes["welcome-title"]} ${showTitle}`}>
        Gustavo Fonseca
      </h1>
      <p className={`${classes["welcome-paragraph"]} ${showParagraph}`}>
        Desenvolvedor web com foco em <span>JavaScript</span>,{" "}
        <span>TypeScript</span>, <span>CSS</span>, <span>HTML</span>,{" "}
        <span>React</span> e<span> Next.js</span>.
      </p>
    </section>
  );
};

export default Welcome;
