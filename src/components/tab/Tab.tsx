import { FC, useContext } from "react";
import { css } from "styled-components";
import styled from "styled-components";
import { TabProps } from "../../../typings/tab";
import { TabContext } from "../../hooks/context";

export const buttonVariants = {
  selected: css`
    color: #006ac3;
    border-bottom: 3px solid #006ac3;
  `,
  default: css`
    color: #6f6f6f;
    border-bottom: 0px;
  `
};

const BaseTab = styled.button<TabProps>`
  width: 98px;
  height: 52px;
  margin: 0;
  padding: 1rem 0.2rem;
  background-color: transparent;
  cursor: pointer;
  border-style: none;
  &:hover {
    background: lightgray; // just to prove its hovering
  }
  &:focus,
  &:active {
    ${(props) =>
      props.id === props.activeTab || props.isActive
        ? buttonVariants["selected"]
        : buttonVariants["default"]}
  }
  &.active {
    ${(props) =>
      props.className === "active"
        ? buttonVariants["selected"]
        : buttonVariants["default"]}
  }
`;

export const Tab: FC<TabProps> = ({
  id,
  variant,
  className,
  isActive,
  children,
  onClick,
  ...rest
}: TabProps) => {
  const { state } = useContext(TabContext);
  const { activeTab } = state;
  return (
    <>
      <BaseTab
        tabIndex={0}
        variant={variant}
        className={activeTab === id ? "active" : undefined}
        aria-label="tab with information"
        role="button"
        type="button"
        onClick={() => onClick(id)}
        {...rest}
      >
        {children}
      </BaseTab>
    </>
  );
};
