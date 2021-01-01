import React, { createContext, useContext, useReducer } from "react";

let notes = [];

const StoreContext = createContext();

const reducer = (note, { type, payload }) => {
  switch (type) {
    case "init":
      notes = payload;
    case "getNotes":
      return notes;
    case "create":
      return notes;
    case "edit":
      return notes;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, notes);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
