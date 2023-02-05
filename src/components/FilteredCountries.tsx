import React from "react";
import Card from "./Card";
import { useGlobalContext } from "../context";

const FilteredCountries: React.FC = () => {
  const { filtered, foundFilter } = useGlobalContext();
  return (
    <section className="countries grid container container--py">
      {foundFilter ? (
        filtered.map((country, index) => {
          return <Card key={index} {...country} />;
        })
      ) : (
        <p>No countries found...</p>
      )}
    </section>
  );
};

export default FilteredCountries;
