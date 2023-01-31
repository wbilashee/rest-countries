import React from "react";
import { Country } from "../model";

const Card: React.FC<Country> = ({
  flag,
  name,
  population,
  region,
  capital,
}) => {
  return (
    <article className="card">
      <div className="card__image">
        <img src={flag} alt={name} />
      </div>
      <div className="card__body">
        <h4>{name}</h4>
        <p>
          <span>Population: </span>
          {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
        <p>
          <span>Region: </span>
          {region}
        </p>
        <p>
          <span>Capital: </span>
          {capital}
        </p>
      </div>
    </article>
  );
};

export default Card;
