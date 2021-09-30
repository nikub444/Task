import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
interface AllHouses {
  _id: string;
  address: string;
  floorsNumber: number;
  description: string;
  label: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
const HousesAll = () => {
  useState();

  //   const fetchHs = async () => {
  //     const endpoint = `http://mobile-reality-backend.sadek.usermd.net/houses/all`;
  //     const data = await (await fetch(endpoint)).json();
  //     return data.results.map((question: AllHouses) => ({
  //       ...question,
  //     }));
  //   };

  //   useEffect(() => {
  //     fetch(`http://mobile-reality-backend.sadek.usermd.net/houses/all`)
  //       .then((response) => response.json())
  //       .then((data) => console.log(fetchHs()));
  //     const asd = fetchHs();
  //     console.log(asd);
  //   }, []);
  return (
    <div>
      <Link to="/houses">wróc</Link>
    </div>
  );
};
export default HousesAll;
