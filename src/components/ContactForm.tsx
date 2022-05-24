import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import DoubleFrame from "./DoubleFrame";

const Title = styled.h1`
  color: ${(p) => p.theme.main};
  text-transform: uppercase;
  margin: 0;
  line-height: 1;
`;

const Label = styled.label`
  color: ${(p) => p.theme.main};
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.4rem;
  margin-bottom: 1rem;
  resize: none;

  &:hover,
  &:focus {
    border: 2px solid ${(p) => p.theme.main};
    outline: none;
    box-shadow: none;
  }
`;

const Button = styled.button`
  padding: 0.7rem 0.5rem;
  text-align: center;
  background: ${(p) => p.theme.main};
  width: 100%;
  font-weight: bold;
  font-size: 1.1rem;

  &:hover {
    color: white;
    background: ${(p) => p.theme.darkMain};
  }
`;

const ContactForm = ({
  title,
  showSubtitle,
}: {
  title?: string;
  showSubtitle?: boolean;
}) => {
  const { t } = useTranslation();

  return (
    <DoubleFrame frameColor="white">
      {title ? (
        <Title>{t(title)}</Title>
      ) : (
        <>
          <Title>{t("your-new")}</Title>
          <Title>{t("home-awaits")}</Title>
        </>
      )}
      {showSubtitle && (
        <span className="mt-2 d-block">{t("contact-us-for-best-offer")}</span>
      )}

      <form className="container-fluid mt-3 p-0">
        <div className="row px-0">
          <div className="col-lg-6 d-flex flex-column">
            <Label>
              {t("first-name")} <span className="text-white">*</span>
            </Label>
            <Input placeholder={t("enter-first-name")} />
          </div>

          <div className="col-lg-6 d-flex flex-column">
            <Label>
              {t("last-name")} <span className="text-white">*</span>
            </Label>
            <Input placeholder={t("enter-last-name")} />
          </div>
        </div>

        <div className="d-flex flex-column">
          <Label>
            Email <span className="text-white">*</span>
          </Label>
          <Input placeholder={t("enter-email")} type="email" />
        </div>

        <div className="d-flex flex-column">
          <Label htmlFor="message">
            Message <span className="text-white">*</span>
          </Label>
          <Input
            as="textarea"
            name="message"
            placeholder={t("enter-message")}
            id="message"
            rows={6}
          ></Input>
        </div>

        <Button type="button">{t("contact-agents-now")}</Button>
      </form>
    </DoubleFrame>
  );
};

export default ContactForm;
