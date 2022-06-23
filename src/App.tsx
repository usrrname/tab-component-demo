import React, { Reducer, useEffect, useReducer, useState } from "react";
import { TabCollection } from "./components/tab/TabCollection";
import "./styles.css";
import { getContent } from "./api/getContent";
import { TabDataProps } from "../typings/tab";
import { initialState, TabContext } from "./hooks/context";
import { TabState, Action, tabReducer } from "./hooks/reducer";

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [tabs, setTabs] = useState<TabDataProps[]>([]);
  const [state, dispatch] = useReducer<Reducer<TabState, Action>>(
    tabReducer,
    initialState
  );

  const value = { tabs, setTabs, state, dispatch };

  useEffect(() => {
    let mounted = true; // this is more of a check.

    getContent(1).then((items: TabDataProps[]) => {
      if (mounted) {
        // since useEffect runs once on load
        // we know the component is ready to be hydrated
        if (items) {
          setTabs(items);
          setLoading(false);
        }
      }
      return () => (mounted = false);
    });
  }, []);

  return (
    // TODO: if/else lengthiness. decouple state from render outcomes
    <TabContext.Provider value={value}>
      {loading && (
        <>
          <p>Loading...</p>
        </>
      )}
      {!loading && <TabCollection children={undefined} tabs={tabs} />}
    </TabContext.Provider>
  );
}
