import * as React from "react";
import PropTypes from "prop-types";
import Container from "../Container";

type FooterProps = {
  //
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-white dark:bg-dark-600 backdrop-filter backdrop-blur bg-opacity-70">
      <Container>
        <ul className="py-12 text-center">
          <li>
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="https://sneakarts.com"
                target={"_blank"}
                rel="noreferrer"
                className="font-bold text-primary-500 hover:text-primary-400 duration-200 transition-colors ease-in-out"
              >
                SneakArts
              </a>{" "}
              Marketplace
            </p>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  //
};

export default Footer;
