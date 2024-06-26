import { ButtonHTMLAttributes, FC } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export interface LinkProps extends ButtonHTMLAttributes<HTMLAnchorElement> {
  href: string;
  isActive?: boolean;
}

const BasicLink = styled(NavLink)`
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
  &.active {
    &:before {
      right: 0;
    }
  }
`;

export const Link: FC<LinkProps> = ({
  href,
  isActive = false,
  children,
  ...props
}) => {
  return (
    <BasicLink {...props} to={href}>
      {children}
    </BasicLink>
  );
};
