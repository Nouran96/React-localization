import styled from "styled-components";

const Underline = styled.span`
  width: 40px;
  height: 5px;
  background: white;
`;

const BlueTitle = styled.h1<{ size?: string; transform?: string }>`
  color: ${(p) => p.theme.darkBlueText};
  text-transform: ${(p) => p.transform || "normal"};
  font-size: ${(p) => p.size || "2.8rem"};
  font-weight: bold;
`;

const MainWrapper = styled.header`
  padding: 7rem 12rem;
`;

export { Underline, BlueTitle, MainWrapper };
