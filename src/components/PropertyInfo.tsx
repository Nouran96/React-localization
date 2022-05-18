import React, { FunctionComponent } from "react";
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
    { key: "Number of Units", value: "22" },
    { key: "Size", value: "From 8,250 sq. feet" },
    { key: "Total Floors/Stories", value: "16" },
    { key: "Parking Spaces", value: "2 per unit" },
    { key: "Year Built", value: "2023" },
  ];

  return (
    <MainWrapper className="container-fluid">
      <div className="row justify-content-between align-items-end">
        <div className="col-lg-5 d-flex flex-column gap-2">
          <Subtitle>Luxury Condos</Subtitle>
          <BlueTitle transform="uppercase">Property Info</BlueTitle>
          <Paragraph>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </Paragraph>
          <Paragraph>
            Feel free to drag and drop me anywhere you like on your page. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </Paragraph>
          <Paragraph>
            This is a great space to write long text about your company and your
            services. You can use this space to go into a little more detail
            about your company.
          </Paragraph>
        </div>
        <div className="col-lg-6 d-flex flex-column gap-2">
          <BlueTitle size="1.5rem" className="mb-4">
            More Details
          </BlueTitle>
          {propertyDetails.map((detail) => (
            <div key={detail.key} className="row">
              <Paragraph className="col-lg-6">{detail.key}</Paragraph>
              <Paragraph className="col-lg-6">{detail.value}</Paragraph>
            </div>
          ))}
        </div>
      </div>
    </MainWrapper>
  );
};

export default PropertyInfo;
