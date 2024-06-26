import { FC } from "react";
import styled from "styled-components";
import { ButtonProps, StyledButton } from "../Button";
import {
  Heart,
  ChevronLeft,
  ChevronRight,
  X,
  AlignJustify,
} from "lucide-react";
import { Link } from "react-router-dom";

interface IconButtonProps extends ButtonProps {
  icon: "favorite" | "arrow-left" | "arrow-right" | "remove" | "menu";
}

const StyledIconButton = styled(StyledButton)`
  padding: 1rem;
  border: none;
  background-color: transparent;
  color: var(--primary-color);
  a {
    color: var(--primary-color);
    &:hover {
      color: #fff;
    }
  }
`;

const IconButton: FC<IconButtonProps> = ({
  type,
  children,
  variant,
  icon,
  href = "",
  ...props
}) => {
  return (
    <StyledIconButton
      variant={variant}
      type={type}
      aria-label={icon}
      {...props}
    >
      {href ? (
        <Link to={href}>
          {icon === "favorite" && <Heart />}
          {icon === "arrow-left" && <ChevronLeft />}
          {icon === "arrow-right" && <ChevronRight />}
          {icon === "remove" && <X />}
          {icon === "menu" && <AlignJustify />}
          {children}
        </Link>
      ) : (
        <>
          {icon === "favorite" && <Heart />}
          {icon === "arrow-left" && <ChevronLeft />}
          {icon === "arrow-right" && <ChevronRight />}
          {icon === "remove" && <X />}
          {icon === "menu" && <AlignJustify />}
          {children}
        </>
      )}
    </StyledIconButton>
  );
};

export default IconButton;
