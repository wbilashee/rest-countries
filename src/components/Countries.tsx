import React from "react";
import { useGlobalContext } from "../context";
import Card from "./Card";

const Countries: React.FC = () => {
  const { countries } = useGlobalContext();
  return (
    <section className="countries grid container container--py">
      {countries.map((country, index) => {
        return <Card key={index} {...country} />;
      })}
    </section>
  );
};

export default Countries;
