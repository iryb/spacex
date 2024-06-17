import React, { ButtonHTMLAttributes, FC } from "react";
import styled, { css } from "styled-components";

export type Link = {
  href: string;
  title: string;
  isActive?: boolean;
};

export interface LinkProps extends ButtonHTMLAttributes<HTMLAnchorElement> {
  href: string;
  isActive?: boolean;
}

const BasicLink = styled.a<LinkProps>`
  display: inline-block;
  position: relative;
  text-decoration: none;
  font-family: var(--secondary-font);
  text-transform: uppercase;
  font-weight: 600;
  transition: all 250ms ease-out;
  color: #fff;
  overflow: hidden;
  padding: 0 0 5px;
  letter-spacing: 1.5px;
  &:before {
    content: "";
    position: absolute;
    bottom: 1px;
    right: 100%;
    width: 100%;
    height: 1px;
    background-color: #fff;
    transition: all 250ms ease-out;
  }
  &:hover {
    &:before {
      right: 0;
    }
  }
  ${({ isActive }) =>
    isActive &&
    css`
      &:before {
        right: 0;
      }
    `}
`;

export const Link: FC<LinkProps> = ({
  href,
  isActive = false,
  children,
  ...props
}) => {
  return (
    <BasicLink {...props} href={href} isActive={isActive}>
      {children}
    </BasicLink>
  );
};
