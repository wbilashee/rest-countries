import React from "react";
import Form from "./Form";
import AllCountries from "./AllCountries";
import { useGlobalContext } from "../context";
import FilteredCountries from "./FilteredCountries";

const Home: React.FC = () => {
  const { searchTerm } = useGlobalContext();

  return (
    <>
      <Form />
      {searchTerm.length > 0 ? <FilteredCountries /> : <AllCountries />}
    </>
  );
};

export default Home;
