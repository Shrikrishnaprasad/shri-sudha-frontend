import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();
//const initialState = {};
const initialStateUser = { isAdmin: false };

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(initialStateUser);

  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

AppProvider.propTypes = {
  children: PropTypes.any,
};
