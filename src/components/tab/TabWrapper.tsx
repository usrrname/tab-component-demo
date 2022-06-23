import styled from "styled-components";
import { TabSliderProps } from "./TabSlider";

export const TabWrapper = styled.div<TabSliderProps>`
  max-width: calc(98 * 7);
  height: 52px;
  overflow-y: hidden;
  justify-content: ${({ tabs }) =>
    tabs?.length > 7 ? "space-between" : "space-evenly"};
`;
