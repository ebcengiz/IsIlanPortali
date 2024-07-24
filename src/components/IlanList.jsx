/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import IlanKartlari from "./IlanKartlari";
import { JobContext } from "../JobContext";

const IlanList = () => {
  const { jobs } = useContext(JobContext);

  return (
    <div>
      {jobs.map((ilan, index) => (
        <IlanKartlari key={index} ilan={ilan} />
      ))}
    </div>
  );
};

export default IlanList;
