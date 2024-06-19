import { useCallback, useRef } from "react";
import styled from "styled-components";
import { register } from "swiper/element/bundle";
import { Card } from "../../organisms/Card";
import IconButton from "../../atoms/IconButton";
import { Wrapper } from "../../../globalStyles";

register();

type ToursCarouselProps = {
  slides: {
    image: string;
    title: string;
    description: string;
  }[];
};

const ToursCarouselStyled = styled.section`
  padding: clamp(30px, 5vw, 80px) 0;
  h2 {
    color: #fff;
    text-transform: uppercase;
    font-size: clamp(16px, 3vw, 32px);
    letter-spacing: 2px;
    margin: 0;
  }
  .title-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  .carousel {
    padding: 0 0 70px;
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
            />
            <IconButton
              icon="arrow-right"
              variant="secondary"
              onClick={handleNext}
            />
          </div>
        </div>

        <swiper-container slides-per-view="3" ref={swiperRef}>
          {slides.map(({ image, title, description }) => (
            <swiper-slide>
              <Card image={image} title={title} description={description} />
            </swiper-slide>
          ))}
        </swiper-container>
      </Wrapper>
    </ToursCarouselStyled>
  );
};
