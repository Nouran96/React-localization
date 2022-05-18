import React, { FunctionComponent } from "react";
import { BlueTitle, MainWrapper } from "./Shared";

interface StepsSectionProps {}

const StepsSection: FunctionComponent<StepsSectionProps> = () => {
  return (
    <MainWrapper>
      <BlueTitle className="text-center" size="2rem">
        O.P Real Estate
      </BlueTitle>
      <BlueTitle transform="uppercase" className="text-center" size="3.5rem">
        FIND YOUR DREAM HOME.
      </BlueTitle>
    </MainWrapper>
  );
};

export default StepsSection;
