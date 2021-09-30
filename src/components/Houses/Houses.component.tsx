import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "./Houses.styles";

const Houses = () => (
  <div>
    <h2>Lista dostępnych akcji</h2>
    <Nav>
      <ul>
        <li>
          <Link to="/houses/all">Lista budynków</Link>
        </li>
        <li>
          <Link to="/houses/details">Detale budynku</Link>
        </li>
        <li>
          <Link to="/houses/delete">Usuwanie budynku</Link>
        </li>
      </ul>
    </Nav>
  </div>
);
export default Houses;
