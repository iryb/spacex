import React, { ButtonHTMLAttributes, FC } from "react";
import styled, { css } from "styled-components";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  href?: string;
}

const backgroundColor = "#D3EAFF";
const foregroundColor = "#000";
const hoverBackgroundColor = "#7BC0FF";
const hoverForegroundColor = "#000";

const styles = css`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  height: 2.5em;
  justify-content: center;
  text-decoration: none;
  appearance: none;
  padding: 0 1em;
  border-radius: 0.125em;
  box-sizing: border-box;
  transition: background-color 250ms ease-out, color 250ms ease-out,
    border-color 250ms ease-out;
  background-color: ${backgroundColor};
  color: ${foregroundColor};
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background-color: ${hoverBackgroundColor};
    color: ${hoverForegroundColor};
  }

  &:focus {
    outline: none;
  }
`;

const Anchor = styled.a`
  ${styles}
`;
const StyledButton = styled.button`
  ${styles}
`;

const Button: FC<ButtonProps> = ({ type, children, ...props }) => {
  const { href } = props;
  if (href) {
    return <Anchor {...props}>{children}</Anchor>;
  }
  return (
    <StyledButton {...props} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
