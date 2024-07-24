/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

const IlanKartlari = ({ ilan }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/ilan/${ilan.id}`);
  };

  return (
    <div className="ilan-karti" onClick={handleClick}>
      <img src={ilan.job_image_url} alt={ilan.job_title} />
      <h2>{ilan.job_title}</h2>
      <p>{ilan.job_description}</p>
      <p>{ilan.location}</p>
      <p>{ilan.category}</p>
    </div>
  );
};

export default IlanKartlari;
