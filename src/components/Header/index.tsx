/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Content, Navigation } from "./styles";
import { useState } from "react";

import Modal from "react-modal";

import logoImg from "../../assets/img/logo.svg";
import hamburgerMenuIcon from "../../assets/img/icon-hamburger.svg";
import closeMenuIcon from "../../assets/img/icon-close-menu.svg";

export const Header = () => {
  const [modal, setModal] = useState(false);
  const [display, setDisplay] = useState(true);

  return (
    <Container>
      <div className="gradient"></div>
      <Modal
        className="react-modal-content"
        overlayClassName="react-modal-overlay"
        isOpen={modal}
      >
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#discover">Discover</a>
          </li>
          <li>
            <a className="last-anchor" href="#get-started">
              Get Started
            </a>
          </li>
        </ul>
      </Modal>
      <Content>
        <a href="#">
          <h1 className="seo-h1">
            Crowdfunding • This is just for SEO best practices =)
          </h1>
          <img src={logoImg} alt="crowdfund" />
        </a>
        <Navigation>
          {display ? (
            <button
              onClick={() => {
                setModal(!modal);
                setDisplay(!display);
              }}
              className="hamburger-menu"
            >
              <img src={hamburgerMenuIcon} alt="open menu" />
            </button>
          ) : (
            <button
              onClick={() => {
                setModal(!modal);
                setDisplay(!display);
              }}
              className="close-modal-button"
            >
              <img src={closeMenuIcon} alt="close menu" />
            </button>
          )}
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#discover">Discover</a>
            </li>
            <li>
              <a href="#get-started">Get Started</a>
            </li>
          </ul>
        </Navigation>
      </Content>
    </Container>
  );
};
