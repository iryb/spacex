import { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { register } from "swiper/element/bundle";
import { Card } from "../../organisms/Card";
import IconButton from "../../atoms/IconButton";
import { Wrapper } from "../../../globalStyles";
import { getRandomImage } from "../../../utils/utils";

type ToursCarouselProps = {
  slides: {
    id: string;
    image: string;
    title: string;
    description: string;
  }[];
};

const ToursCarouselStyled = styled.section`
  padding: clamp(50px, 5vw, 80px) 0;
  h2 {
    color: #fff;
    text-transform: uppercase;
    font-size: clamp(20px, 3vw, 32px);
    letter-spacing: 2px;
    margin: 0;
  }
  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: clamp(30px, 5vw, 50px);
  }
  .carousel {
    padding: 0 0 70px;
  }
  .navigation {
    display: flex;
    gap: 30px;
  }
  .arrow {
    padding: 0;
  }
`;

export const ToursCarousel = ({ slides }: ToursCarouselProps) => {
  const swiperRef: any = useRef(null);

  const handlePrev = useCallback(() => {
    swiperRef.current.swiper.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef.current.swiper.slideNext();
  }, [swiperRef]);

  useEffect(() => {
    register();

    const params = {
      spaceBetween: 15,
      breakpoints: {
        641: {
          slidesPerView: 2,
        },
        1025: {
          slidesPerView: 3,
        },
      },
    };

    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, [swiperRef]);

  return (
    <ToursCarouselStyled>
      <Wrapper>
        <div className="title-container">
          <h2>Popular tours</h2>
          <div className="navigation">
            <IconButton
              icon="arrow-left"
              variant="secondary"
              onClick={handlePrev}
              className="arrow"
            />
            <IconButton
              icon="arrow-right"
              variant="secondary"
              onClick={handleNext}
              className="arrow"
            />
          </div>
        </div>

        <swiper-container init="false" ref={swiperRef} slidesPerView={3}>
          {slides.map(({ id, title, description }, index) => (
            <swiper-slide key={index}>
              <Card
                image={getRandomImage()}
                title={title}
                description={description}
                id={id}
              />
            </swiper-slide>
          ))}
        </swiper-container>
      </Wrapper>
    </ToursCarouselStyled>
  );
};
