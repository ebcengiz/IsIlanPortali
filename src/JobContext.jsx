/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/is_ilanlari")
      .then((response) => setJobs(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return <JobContext.Provider value={{ jobs }}>{children}</JobContext.Provider>;
};
