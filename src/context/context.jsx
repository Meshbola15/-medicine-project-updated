import React, { useState, useContext, useEffect } from "react";
import medicalDataService from "../services/Medicial.services";

const AppContext = React.createContext();

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const AppProvider = ({ children }) => {
  const [list, setList] = useState(getLocalStorage());
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const getData = async () => {
    const data = await medicalDataService.getAllmedical();
    setList(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  useEffect(() => {
    setLoading(true);
    getData();
    setLoading(false);
  }, [list]);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  return (
    <AppContext.Provider
      value={{
        list,
        setLoading,
        alert,
        showAlert,
        loading,
        getData,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppProvider, AppContext };
