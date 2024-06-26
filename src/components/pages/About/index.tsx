import React from "react";
import { Banner } from "../../organisms/Banner";
import { gql, useQuery } from "@apollo/client";
import { Spinner } from "../../atoms/Spinner";
import { TextSection } from "../../templates/TextSection";

const GET_COMPANY_INFO = gql`
  query GetCompanyInfo {
    company {
      summary
      founded
    }
  }
`;

export const About = () => {
  const { loading, error, data } = useQuery(GET_COMPANY_INFO);

  if (loading) return <Spinner />;

  return (
    <>
      <Banner title="About" image="/assets/about-banner.jpg" height="small" />
      <TextSection>
        <p>{data.company.summary}</p>
        <p>Founded: {data.company.founded}</p>
      </TextSection>
    </>
  );
};
