import { FC } from "react";
import styled from "styled-components";

type ChevronProps = {
  children: string | JSX.Element;
  onClick: () => {};
  display?: "block" | "inline-block" | "inline" | "none";
};

export const BaseChevron = styled.button<ChevronProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 28px;
  height: 52px;
  display: ${({ display }) => display};
  &:active,
  &:focus {
    outline: 1px solid lightgray;
  }
`;

export const Chevron: FC<ChevronProps> = ({ ...props }) => {
  return (
    <BaseChevron type="button" role="navigation" {...props}>
      {props.children}
    </BaseChevron>
  );
};
