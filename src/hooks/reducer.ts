import { Reducer } from "react";
import { TabDataProps } from "../../typings/tab";

export type Action =
  | { type: "update"; id: number }
  | { type: "reset"; id: number };

export interface TabState {
  activeTab: number;
  text: string;
  tabs: TabDataProps[];
}

export const tabReducer: Reducer<TabState, Action> = (
  state: TabState,
  action: Action
): TabState => {
  switch (action.type) {
    case "update":
      const activeItemText = state.tabs.find(
        (item: TabDataProps) => item.id === action.id
      )?.body;

      const updatedState = {
        ...state,
        activeTab: action.id,
        text: activeItemText,
        data: state.tabs.map((item) =>
          item.id === action.id
            ? { ...item, isActive: true }
            : { ...item, isActive: false }
        )
      };
      return updatedState;

    default:
      return state;
  }
};
