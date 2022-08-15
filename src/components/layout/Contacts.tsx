import { CopyToClipboard } from "react-copy-to-clipboard";

import Image from "next/image";

import classes from "./Contacts.module.css";

const Contacts = () => {

  return (
    <section className={classes["contacts-section"]} id="contacts-section">
      <h2 className={classes["section-title"]}>Contatos</h2>
      <div className={classes["contacts-div"]}>
        <div className={classes["main-div"]}>
          <Image
            height="80px"
            width="80px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="Github logo"
            className={classes["github-icon"]}
          />
          <span className={classes["link-span"]}>Github:</span>
          <a
            href="https://github.com/gusfonseca21"
            target="_blank"
            rel="noopener noreferrer"
            className={classes["anchor-link"]}
          >
            https://github.com/gusfonseca21
          </a>
        </div>
        <div className={classes["main-div"]}>
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="Linkedin logo"
            height="80px"
            width="80px"
            className={classes["linkedin-icon"]}
          />
          <span className={classes["link-span"]}>LinkedIn:</span>
          <a
            href="https://www.linkedin.com/in/gustavo-fonseca-38b736248/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes["anchor-link"]}
          >
            https://www.linkedin.com/in/gustavo-fonseca-38b736248/
          </a>
        </div>
        <div className={classes["main-div"]}>
          <Image
            src="https://cdn.worldvectorlogo.com/logos/gmail-icon.svg"
            height="80px"
            width="80px"
            alt="gusfonseca.dev@gmail.com"
            className={classes["email-icon"]}
          />
          <span className={classes["link-span"]}>
            E-mail:
          </span>
            <CopyToClipboard
              text="gusfonseca.dev@gmail.com"
              onCopy={() => alert("Email copiado!")}
            >
              <span className={classes["anchor-link"]}>gusfonseca.dev@gmail.com</span>
            </CopyToClipboard>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
