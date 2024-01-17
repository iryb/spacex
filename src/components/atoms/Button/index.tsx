import { ButtonHTMLAttributes, FC } from "react";
import styled, { css } from "styled-components";

type ButtonVatiant = "primary" | "secondary";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  href?: string;
  variant: ButtonVatiant;
}

const bg = {
  primary: () => css`
    background-color: var(--primary-color);
    &:hover {
      background-color: var(--primary-hover-color);
    }
  `,
  secondary: () => css`
    background-color: var(--secondary-color);
    &:hover {
      background-color: var(--secondary-hover-color);
    }
  `,
};

const BasicButton = styled.button`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  height: 2.5em;
  justify-content: center;
  text-decoration: none;
  appearance: none;
  padding: 0 1em;
  border: none;
  font-family: var(--secondary-font);
  font-size: clamp(16px, 1.5vw, 24px);
  text-transform: uppercase;
  font-weight: 600;
  box-sizing: border-box;
  transition: background-color 250ms ease-out, color 250ms ease-out,
    border-color 250ms ease-out;
  color: #000;
  cursor: pointer;
`;

const StyledButton = styled(BasicButton)<ButtonProps>`
  ${({ variant }) => bg[variant]}
`;

const Button: FC<ButtonProps> = ({ type, children, variant, ...props }) => {
  return (
    <StyledButton variant={variant} type={type} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
