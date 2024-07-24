/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { JobContext } from "../JobContext";

const IlanDetay = () => {
  const { id } = useParams();
  const { jobs } = useContext(JobContext);
  const ilan = jobs.find((job) => job.id === parseInt(id));

  if (!ilan) {
    return <div>İlan bulunamadı!</div>;
  }

  return (
    <div className="ilan-detay">
      <h2>{ilan.job_title}</h2>
      <img src={ilan.job_image_url} alt={ilan.job_title} />
      <p>{ilan.job_description}</p>
      <p>{ilan.location}</p>
      <p>{ilan.category}</p>
    </div>
  );
};

export default IlanDetay;
