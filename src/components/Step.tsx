import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";

import DoubleFrame from "./DoubleFrame";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  position: relative;

  .column:not(:last-of-type) &::after {
    position: absolute;
    content: "";
    width: 150px;
    height: 1px;
    background: #a8a8a8;
    right: -11rem;
    top: 50%;
  }
`;

const Icon = styled.img`
  width: 53px;
  height: 66px;
`;

const Title = styled.span`
  margin-top: 2rem;
  margin-bottom: 0.7rem;
  font-weight: 300;
  font-size: 1.2rem;
`;

const Paragraph = styled.span`
  font-weight: 300;
  text-align: center;
`;

interface StepProps {
  icon: string;
  title: string;
}

const Step: FunctionComponent<StepProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className="col-lg-4 column">
      <div className="d-flex flex-column align-items-center justify-content-center h-100">
        <Wrapper>
          <DoubleFrame reverseFrame fullHeight>
            <Zoom>
              <div className="d-flex justify-content-center align-items-center h-100">
                <Icon src={props.icon} alt="" />
              </div>
            </Zoom>
          </DoubleFrame>
        </Wrapper>

        <Title>{t(props.title)}</Title>
        <Paragraph>{t("paragraph-four")}</Paragraph>
      </div>
    </div>
  );
};

export default Step;
