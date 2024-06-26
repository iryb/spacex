import { LoaderCircle } from "lucide-react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  rom {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const SpinnerStyled = styled.div`
  position: absolute;
  top: calc(50% - 12px);
  left: calc(50% - 12px);
  display: inline-block;
  color: #fff;
  width: 24px;
  height: 24px;
  animation: ${rotate} 2s linear infinite;
`;

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <SpinnerStyled>
        <LoaderCircle />
      </SpinnerStyled>
    </SpinnerWrapper>
  );
};
