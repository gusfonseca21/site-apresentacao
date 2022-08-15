import { useEffect, useState } from "react";

import { Link } from "react-scroll";

import classes from "./Header.module.css";

import { GiHamburgerMenu } from "react-icons/gi";

const Header: React.FC<{ scrollPosition: number }> = (props) => {
  const [showHeader, setShowHeader] = useState("");

  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowHeader(classes["show"]);
    }, 1 * 6500);
  }, []);

  const menuClickHandler = () => {
    if (menuState) {
      setMenuState(false);
    }

    if (!menuState) {
      setMenuState(true);
    }
  };

  const closeNavbarHandler = () => {
    setMenuState(false);
  };

  return (
    <header
      className={`${classes["header-section"]} ${
        menuState && classes["header-menu-open"]
      } ${showHeader}`}
    >
      <div
        className={`${classes["gustavo-fonseca"]} ${
          menuState && classes["gustavo-fonseca-menu-open"]
        }`}
      >
        <div
          className={`${classes["navbar-top"]} ${
            menuState && classes["navbar-top-open"]
          }`}
        >
          <span className={classes["navbar-gustavo"]}>Gustavo Fonseca</span>
          <GiHamburgerMenu
            className={classes["menu-icon"]}
            onClick={menuClickHandler}
          />
        </div>
        <ul
          className={`${classes["nav-links"]} ${
            menuState && classes["nav-links-menu-open"]
          }`}
        >
          <Link
            className={classes.start}
            spy={true}
            to={"welcome-section"}
            activeClass={classes["selected-link"]}
            duration={800}
            delay={0}
            smooth={true}
            onClick={closeNavbarHandler}
          >
            Início
          </Link>
          <Link
            className={classes["sobre-mim"]}
            spy={true}
            to={"about-me-section"}
            activeClass={classes["selected-link"]}
            duration={800}
            delay={0}
            smooth={true}
            onClick={closeNavbarHandler}
          >
            Sobre Mim
          </Link>
          <Link
            className={classes.conhecimentos}
            spy={true}
            to={"knowledge-section"}
            activeClass={classes["selected-link"]}
            duration={800}
            delay={0}
            smooth={true}
            onClick={closeNavbarHandler}
          >
            Conhecimentos
          </Link>
          <Link
            className={classes.projetos}
            spy={true}
            to={"projects-section"}
            activeClass={classes["selected-link"]}
            duration={800}
            delay={0}
            smooth={true}
            onClick={closeNavbarHandler}
          >
            Projetos
          </Link>
          <Link
            className={classes.contato}
            spy={true}
            to={"contacts-section"}
            activeClass={classes["selected-link"]}
            duration={800}
            delay={0}
            smooth={true}
            onClick={closeNavbarHandler}
          >
            Contatos
          </Link>
        </ul>
      </div>
      <ul className={`${classes["nav-links"]} `}>
        <Link
          className={classes.start}
          spy={true}
          to={"welcome-section"}
          activeClass={classes["selected-link"]}
          duration={800}
          delay={0}
          smooth={true}
        >
          Início
        </Link>
        <Link
          className={classes["sobre-mim"]}
          spy={true}
          to={"about-me-section"}
          activeClass={classes["selected-link"]}
          duration={800}
          delay={0}
          smooth={true}
        >
          Sobre Mim
        </Link>
        <Link
          className={classes.conhecimentos}
          spy={true}
          to={"knowledge-section"}
          activeClass={classes["selected-link"]}
          duration={800}
          delay={0}
          smooth={true}
        >
          Conhecimentos
        </Link>
        <Link
          className={classes.projetos}
          spy={true}
          to={"projects-section"}
          activeClass={classes["selected-link"]}
          duration={800}
          delay={0}
          smooth={true}
        >
          Projetos
        </Link>
        <Link
          className={classes.contato}
          spy={true}
          to={"contacts-section"}
          activeClass={classes["selected-link"]}
          duration={800}
          delay={0}
          smooth={true}
        >
          Contatos
        </Link>
      </ul>
    </header>
  );
};

export default Header;
