import React from "react";
import { Wrapper } from "../../../globalStyles";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import { Spinner } from "../../atoms/Spinner";
import { Card } from "../../organisms/Card";
import { getRandomImage } from "../../../utils/utils";

const GET_LAUNCHES = gql`
  query GetLaunches {
    launches(limit: 12) {
      id
      title: mission_name
      description: details
      upcoming
      rocket {
        rocket_name
      }
      launch_year
      links {
        video_link
      }
    }
  }
`;

const ToursGridStyled = styled.section`
  padding: clamp(50px, 5vw, 80px) 0;
  color: #fff;
  .row {
    display: grid;
    gap: 20px;
    @media (min-width: 641px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .no-tours {
    text-align: center;
  }
`;

type Tours = {
  launches: {
    id: string;
    title: string;
    description: string;
  }[];
};

export const ToursGrid = () => {
  const { loading, error, data } = useQuery<Tours>(GET_LAUNCHES);

  if (loading) return <Spinner />;

  return (
    <ToursGridStyled>
      <Wrapper>
        <div className="row">
          {data?.launches.map(({ id, title, description }, index) => (
            <Card
              key={index}
              image={getRandomImage()}
              title={title}
              description={description}
              id={id}
            />
          ))}
        </div>
      </Wrapper>
    </ToursGridStyled>
  );
};
