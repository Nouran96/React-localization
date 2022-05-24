import * as React from "react";
import styled from "styled-components";
// import Slide from "react-reveal/Slide";

const Wrapper = styled.div<{ maxWidth?: string }>`
  max-width: ${(props) => props.maxWidth || "500px"};
  position: relative;
`;

const Frame = styled.div<{
  borderColor?: string;
  reverse?: boolean;
  fullHeight?: boolean;
}>`
  position: absolute;
  width: 100%;
  height: ${(p) => (p.fullHeight ? "100%" : "calc(100% - 30px)")};
  border: 10px solid ${(p) => p.borderColor || p.theme.main};
  ${({ reverse }) =>
    reverse
      ? `left: -2rem;
  `
      : `left: 3rem;`}
  top: -2rem;
`;

const BodyWrapper = styled.div<{ bodyColor?: string }>`
  position: relative;
  z-index: 1;
  background-color: ${(p) => p.theme.darkBlue};
  color: ${(p) => p.bodyColor || "white"};
  padding: 2rem;
  height: 100%;
`;

interface DoubleFrameProps {
  children: React.ReactNode;
  maxWidth?: string;
  frameColor?: string;
  bodyColor?: string;
  reverseFrame?: boolean;
  fullHeight?: boolean;
}

const DoubleFrame = (props: DoubleFrameProps) => {
  return (
    // <Slide left>
    <Wrapper maxWidth={props.maxWidth}>
      <Frame
        borderColor={props.frameColor}
        reverse={props.reverseFrame}
        fullHeight={props.fullHeight}
      />
      <BodyWrapper bodyColor={props.bodyColor}>{props.children}</BodyWrapper>
    </Wrapper>
    // </Slide>
  );
};

export default DoubleFrame;
