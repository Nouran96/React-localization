import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

import ArrowIcon from "../assets/images/arrow_icon.svg";
import DoubleArrowIcon from "../assets/images/double_arrow_up_icon.svg";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";

const Video = styled.video`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background: linear-gradient(rgb(24 45 69 / 80%), rgb(24 45 69 / 80%));
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.footer`
  padding: 7rem 12rem;
  position: relative;
`;

const Subtitle = styled.span`
  color: white;
`;

const Title = styled.span`
  color: ${(p) => p.theme.main};
  font-weight: bold;
  font-size: 2.5rem;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 3px;
  margin-bottom: 3rem;
  margin-top: 0.5rem;
`;

const Link = styled.a`
  color: ${(p) => p.theme.main};
  text-decoration: none;
  font-weight: 300;

  &:hover {
    color: ${(p) => p.theme.main};
    cursor: pointer;
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 20px;
  transform: rotate(180deg);
`;

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Wrapper>
      <Video autoPlay muted loop id="myVideo">
        <source
          src="https://video.wixstatic.com/video/11062b_db132ca6141f4d65b2932519436a52bb/1080p/mp4/file.mp4"
          type="video/mp4"
        />
      </Video>

      <Overlay />

      <div className="container-fluid mt-5">
        <div className="row justify-content-between">
          <Zoom>
            <div className="col-md-5">
              <div className="d-flex flex-column justify-content-center my-4">
                <Subtitle>{t("more-info")}</Subtitle>
                <Title>{t("about-op")}</Title>
                <p className="text-white">{t("paragraph-five")}</p>

                <div className="mt-5 d-flex align-items-center gap-3">
                  <Link>{t("checkout-more-listings")}</Link>
                  <Icon src={ArrowIcon} alt="" />
                </div>
              </div>
            </div>
          </Zoom>

          <Slide left>
            <div className="col-md-6">
              <ContactForm title="contact-us" />
            </div>
          </Slide>
        </div>
      </div>

      <div className="d-flex justify-content-between gap-3 align-items-center position-relative mt-5">
        <div style={{ cursor: "pointer" }} onClick={scrollToTop}>
          <img src={DoubleArrowIcon} alt="" width="30" />
        </div>
        <p className="mb-0 text-white">© 2023 by O.P Real Estate Agency</p>
      </div>
    </Wrapper>
  );
};

export default Footer;
