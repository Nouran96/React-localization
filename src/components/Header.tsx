import React, { FunctionComponent } from "react";
import styled from "styled-components";

import headerBg from "../assets/images/header_bg.webp";
import ContactForm from "./ContactForm";
import Logo from "./Logo";
import { Underline } from "./Shared";

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
  return (
    <Wrapper>
      <div className="d-flex justify-content-between pb-5">
        <Logo />

        <div className="d-flex flex-column align-items-end justify-content-end gap-2">
          <LangSwitch>Fr</LangSwitch>
          <span className="text-white">Call Us Toll-Free</span>
          <Phone>1-800-000-0000</Phone>
          <Underline />
        </div>
      </div>

      <div className="container-fluid mt-5">
        <div className="row justify-content-between">
          <div className="col-md-5">
            <div className="d-flex flex-column justify-content-center my-4">
              <Subtitle>Luxury Condos</Subtitle>
              <Title>Royal</Title>
              <Title>Oaks</Title>
              <p className="text-white">
                I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users
                know a little more about you.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <ContactForm showSubtitle />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
