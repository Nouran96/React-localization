import React, { FunctionComponent } from "react";

import { BlueTitle, MainWrapper } from "./Shared";
import NoteIcon from "../assets/images/note_icon.svg";
import MapIcon from "../assets/images/map_icon.svg";
import StackIcon from "../assets/images/stack_icon.svg";
import Step from "./Step";
import { useTranslation } from "react-i18next";

interface StepsSectionProps {}

const StepsSection: FunctionComponent<StepsSectionProps> = () => {
  const { t } = useTranslation();

  return (
    <MainWrapper>
      <BlueTitle className="text-center" size="2rem">
        O.P {t("real-estate")}
      </BlueTitle>
      <BlueTitle transform="uppercase" className="text-center" size="3.5rem">
        {t("find-dream-home")}
      </BlueTitle>

      <div className="container-fluid" style={{ marginTop: "7rem" }}>
        <div className="row">
          <Step icon={StackIcon} title="property-appraisals" />
          <Step icon={NoteIcon} title="free-registration" />
          <Step icon={MapIcon} title="large-coverage" />
        </div>
      </div>
    </MainWrapper>
  );
};

export default StepsSection;
