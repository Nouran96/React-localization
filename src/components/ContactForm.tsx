import React from "react";
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
  return (
    <DoubleFrame frameColor="white">
      {title ? (
        <Title>{title}</Title>
      ) : (
        <>
          <Title>Your new</Title>
          <Title>Home awaits.</Title>
        </>
      )}
      {showSubtitle && (
        <span className="mt-2 d-block">
          Contact us to get the best offer from our agents!
        </span>
      )}

      <form className="container-fluid mt-3 p-0">
        <div className="row px-0">
          <div className="col-lg-6 d-flex flex-column">
            <Label>
              First Name <span className="text-white">*</span>
            </Label>
            <Input placeholder="Enter your first name" />
          </div>

          <div className="col-lg-6 d-flex flex-column">
            <Label>
              Last Name <span className="text-white">*</span>
            </Label>
            <Input placeholder="Enter your last name" />
          </div>
        </div>

        <div className="d-flex flex-column">
          <Label>
            Email <span className="text-white">*</span>
          </Label>
          <Input placeholder="Enter your email" type="email" />
        </div>

        <div className="d-flex flex-column">
          <Label htmlFor="message">
            Message <span className="text-white">*</span>
          </Label>
          <Input
            as="textarea"
            name="message"
            placeholder="Enter your message"
            id="message"
            rows={6}
          ></Input>
        </div>

        <Button type="button">Contact Our Agents Now!</Button>
      </form>
    </DoubleFrame>
  );
};

export default ContactForm;
