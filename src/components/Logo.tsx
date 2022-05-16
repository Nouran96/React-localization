import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Underline } from "./Shared";

const Initials = styled.span`
  color: white;
  font-size: 3rem;
  font-weight: bold;
  font-family: Arial;
  line-height: 1.5;
`;

const Slogan = styled.span`
  color: white;
  font-family: "Cairo", sans-serif;
  margin-top: -13px;
`;

interface LogoProps {}

const Logo: FunctionComponent<LogoProps> = () => {
  return (
    <div className="d-flex flex-column">
      <Initials>O</Initials>
      <Underline />
      <Initials>P</Initials>
      <Slogan>Real State Agency</Slogan>
    </div>
  );
};

export default Logo;
