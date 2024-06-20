import { Banner } from "../../organisms/Banner";
import { ToursCarousel } from "../../templates/ToursCarousel";
import { useQuery, gql } from "@apollo/client";

const GET_LAUNCHES = gql`
  query GetLaunches {
    launches(limit: 10) {
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

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Banner
        title="spacex"
        subtitle="Plan your space trip"
        image="/assets/banner.jpg"
      />
      <ToursCarousel slides={data.launches} />
    </>
  );
};
