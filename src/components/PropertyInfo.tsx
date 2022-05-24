import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { BlueTitle, MainWrapper } from "./Shared";

const Subtitle = styled.span`
  font-size: 1.2rem;
  letter-spacing: 1px;
  color: #444;
`;

const Paragraph = styled.p`
  font-weight: 300;
`;

interface PropertyInfoProps {}

const PropertyInfo: FunctionComponent<PropertyInfoProps> = () => {
  const propertyDetails = [
    { key: "number-of-units", value: "22" },
    { key: "size", value: "from-sq-feet" },
    { key: "total-floors", value: "16" },
    { key: "parking-spaces", value: "per-unit" },
    { key: "year-built", value: "2023" },
  ];

  const { t } = useTranslation();

  return (
    <MainWrapper className="container-fluid">
      <div className="row justify-content-between align-items-end">
        <div className="col-lg-5 d-flex flex-column gap-2">
          <Subtitle>{t("luxury-condos")}</Subtitle>
          <BlueTitle transform="uppercase">{t("property-info")}</BlueTitle>
          <Paragraph>{t("paragraph-one")}</Paragraph>
          <Paragraph>{t("paragraph-two")}</Paragraph>
          <Paragraph>{t("paragraph-three")}</Paragraph>
        </div>
        <div className="col-lg-6 d-flex flex-column gap-2">
          <BlueTitle size="1.5rem" className="mb-4">
            {t("more-details")}
          </BlueTitle>
          {propertyDetails.map((detail) => (
            <div key={detail.key} className="row">
              <Paragraph className="col-lg-6">{t(detail.key)}</Paragraph>
              <Paragraph className="col-lg-6">
                {t(detail.value) || detail.value}
              </Paragraph>
            </div>
          ))}
        </div>
      </div>
    </MainWrapper>
  );
};

export default PropertyInfo;
