import { ButtonHTMLAttributes, FC } from "react";
import styled, { css } from "styled-components";

type ButtonVatiant = "primary" | "secondary";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  href?: string;
  variant: ButtonVatiant;
}

export const bg = {
  primary: () => css`
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    &:hover {
      background-color: var(--secondary-color);
      color: var(--primary-color);
    }
  `,
  secondary: () => css`
    background-color: transparent;
    color: var(--primary-color);
    &:hover {
      border-color: #fff;
      color: #fff;
    }
  `,
};

export const BasicButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  appearance: none;
  padding: 1em 1.5em;
  border: 3px solid var(--primary-color);
  border-radius: 10px;
  letter-spacing: 1.5px;
  font-family: var(--secondary-font);
  font-size: clamp(16px, 1.5vw, 24px);
  text-transform: uppercase;
  font-weight: 600;
  box-sizing: border-box;
  transition:
    background-color 250ms ease-out,
    color 250ms ease-out,
    border-color 250ms ease-out;
  color: var(--secondary-color);
  cursor: pointer;
`;

export const StyledButton = styled(BasicButton)<ButtonProps>`
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
