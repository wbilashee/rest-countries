import React from "react";
import Filter from "./Filter";
import Search from "./Search";

const Form: React.FC = () => {
  return (
    <section className="form flex flex-jc-sb container container--pt">
      <Search />
      <Filter />
    </section>
  );
};

export default Form;
