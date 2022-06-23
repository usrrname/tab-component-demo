import { FC, useContext, useState } from "react";
import styled from "styled-components";
import { TabChildren, TabDataProps } from "../../../typings/tab";
import { TabContext } from "../../hooks/context";
import { Chevron } from "../chevron/Chevron";
import { Tab } from "./Tab";
import { TabWrapper } from "./TabWrapper";

export type TabSliderProps = {
  activeTab: number;
  children: TabChildren;
  tabs: TabDataProps[];
};

export const BaseSlider = styled.div<TabSliderProps>`
  display: flex;
  width: 100%;
  max-height: 52px;
  overflow-x: auto;
  border-bottom: 1px solid lightgray;
  justify-content: start;
`;

export const TabSlider: FC<TabSliderProps> = ({
  activeTab,
  tabs,
  children
}) => {
  const { dispatch } = useContext(TabContext);

  const handleClick = (id: number) => dispatch({ type: "update", id: +id });

  const allTabs = tabs.map((item: TabDataProps) => (
    <Tab
      {...item}
      id={+item.id}
      key={`tab-${item.id}`}
      className={activeTab === item.id ? "active" : undefined}
      children={`${item.id}`}
      onClick={() => handleClick(item.id)}
    />
  ));

  const initialTabs = allTabs.slice(0, 7);
  const nextTabs = allTabs.slice(7, tabs.length);

  const [displayedTabs, setTabs] = useState<TabChildren>(allTabs);
  const [showLeftChevron, setLeftChevron] = useState<boolean>(false);
  const [showRightChevron, setRightChevron] = useState<boolean>(true);

  return (
    <>
      {/* TODO: reduce prop repetition */}
      <BaseSlider activeTab={activeTab} tabs={tabs}>
        <TabWrapper activeTab={activeTab} tabs={tabs}>
          <Chevron
            display={showLeftChevron ? "inline-block" : "none"}
            aria-label="chevron left"
            onClick={async () => {
              setTabs(initialTabs);
              setLeftChevron(false);
              setRightChevron(true);
            }}
          >
            &lsaquo;
          </Chevron>
          {displayedTabs}
        </TabWrapper>
        {tabs.length > 7 && (
          <Chevron
            display={showRightChevron ? "inline-block" : "none"}
            aria-label="chevron right"
            onClick={async () => {
              setTabs(nextTabs);
              setRightChevron(false);
              setLeftChevron(true);
            }}
          >
            &rsaquo;
          </Chevron>
        )}
      </BaseSlider>
    </>
  );
};
