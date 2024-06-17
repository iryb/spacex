import { FC } from "react";
import styled from "styled-components";
import { ButtonProps, StyledButton } from "../Button";
import { Heart, ChevronLeft, ChevronRight, X } from "lucide-react";

interface IconButtonProps extends ButtonProps {
  icon: "favorite" | "arrow-left" | "arrow-right" | "remove";
}

const StyledIconButton = styled(StyledButton)`
  padding: 1rem;
  border: none;
  background-color: transparent;
  color: var(--primary-color);
  &:hover {
    color: #fff;
  }
`;

const IconButton: FC<IconButtonProps> = ({
  type,
  children,
  variant,
  icon,
  ...props
}) => {
  return (
    <StyledIconButton
      variant={variant}
      type={type}
      aria-label={icon}
      {...props}
    >
      {icon === "favorite" && <Heart />}
      {icon === "arrow-left" && <ChevronLeft />}
      {icon === "arrow-right" && <ChevronRight />}
      {icon === "remove" && <X />}
      {children}
    </StyledIconButton>
  );
};

export default IconButton;
