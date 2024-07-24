/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import IlanKartlari from "./IlanKartlari";
import { JobContext } from "../JobContext";

const IlanList = () => {
  const { jobs } = useContext(JobContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.job_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.job_description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Arama"
        value={searchTerm}
        onChange={handleSearch}
      />
      {filteredJobs.map((ilan, index) => (
        <IlanKartlari key={index} ilan={ilan} />
      ))}
    </div>
  );
};

export default IlanList;
