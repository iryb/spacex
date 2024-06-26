import { Banner } from "../../organisms/Banner";
import { ToursCarousel } from "../../templates/ToursCarousel";
import { useQuery, gql } from "@apollo/client";
import { Spinner } from "../../atoms/Spinner";

const GET_LAUNCHES = gql`
  query GetLaunches {
    launches(limit: 10) {
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

export const Home = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES);

  if (loading) return <Spinner />;

  return (
    <>
      <Banner
        title="spacex"
        subtitle="Plan your space trip"
        image="/assets/banner-2.jpg"
      />
      <ToursCarousel slides={data.launches} />
    </>
  );
};
