import React from "react";
import Card from "./Card";
import { useGlobalContext } from "../context";

const AllCountries: React.FC = () => {
  const { countries } = useGlobalContext();
  return (
    <section className="countries grid container container--py">
      {countries.map((country, index) => {
        return <Card key={index} {...country} />;
      })}
    </section>
  );
};

export default AllCountries;
