import { FC, useContext } from "react";
import styled from "styled-components";
import { TabContainerProps, TabContentAreaProps } from "../../../typings/tab";
import { TabContext } from "../../hooks/context";
import { TabContent } from "./TabContent";
import { TabSlider } from "./TabSlider";

const TabContainer = styled.div`
  width: 720px;
  height: 260px;
`;

const ContentArea = styled.div`
  text-align: left;
  border: 1px dashed #9013fe;
  height: 200px;
  background-color: #fbf6ff;
`;

export const TabCollection: FC<TabContainerProps & TabContentAreaProps> = ({
  tabs,
  children
}) => {
  const { state } = useContext(TabContext);
  const { activeTab, text } = state;
  return (
    <>
      <TabContainer key="tab-container" {...children}>
        <TabSlider
          key="tab-slider"
          activeTab={activeTab}
          children={children}
          tabs={tabs}
        />
        <TabContent key="tab-content">
          <ContentArea key={`tab-content-${activeTab}`}>
            {`active tab: ${activeTab}`}
            <p>{text}</p>
          </ContentArea>
        </TabContent>
      </TabContainer>
    </>
  );
};
