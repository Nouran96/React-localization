import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

import headerBg from "../assets/images/header_bg.webp";
import ContactForm from "./ContactForm";
import Logo from "./Logo";
import { Underline } from "./Shared";
import { useTranslation } from "react-i18next";

const Wrapper = styled.header`
  padding: 3rem 12rem;
  background: linear-gradient(rgb(27 38 63 / 50%), rgb(27 38 63 / 50%)),
    url(${headerBg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const LangSwitch = styled.a`
  color: ${(p) => p.theme.main};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: ${(p) => p.theme.main};
    cursor: pointer;
  }
`;

const Phone = styled.span`
  color: ${(p) => p.theme.main};
  font-size: 1.5rem;
  font-weight: bold;
`;

const Subtitle = styled.span`
  color: ${(p) => p.theme.main};
  font-size: 1.3rem;
`;

const Title = styled.span`
  color: white;
  font-weight: bold;
  font-size: 6rem;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 5px;
`;

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(
      code
    ); /* Sends i81n the code of the language to change and the function in i18n.js takes this code and sets
                              it to the local storage variable. The language detector detects this and translates the text that
                              is either in a "t" function or inside a "Trans" component */
  };

  return (
    <Wrapper>
      <div className="d-flex justify-content-between pb-5">
        <Logo />

        <div className="d-flex flex-column align-items-end justify-content-end gap-2">
          {i18n.language === "en" ? (
            <LangSwitch
              onClick={() => {
                changeLanguage("fr");
              }}
            >
              Fr
            </LangSwitch>
          ) : (
            <LangSwitch
              onClick={() => {
                changeLanguage("en");
              }}
            >
              En
            </LangSwitch>
          )}

          <span className="text-white">{t("call-us-toll-free")}</span>
          <Phone>1-800-000-0000</Phone>
          <Underline />
        </div>
      </div>

      <div className="container-fluid mt-5">
        <div className="row justify-content-between">
          <Zoom>
            <div className="col-md-5">
              <div className="d-flex flex-column justify-content-center my-4">
                <Subtitle>{t("luxury-condos")}</Subtitle>
                <Title>Royal</Title>
                <Title>Oaks</Title>
                <p className="text-white">{t("paragraph-one")}</p>
              </div>
            </div>
          </Zoom>

          <Slide left>
            <div className="col-md-6">
              <ContactForm showSubtitle />
            </div>
          </Slide>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
