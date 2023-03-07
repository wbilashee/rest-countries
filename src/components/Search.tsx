import React from "react";
import { HiSearch } from "react-icons/hi";
import { useGlobalContext } from "../context";

const Search = () => {
  const { searchCountries } = useGlobalContext();
  return (
    <article className="form__search">
      <HiSearch className="form__search__icon" />
      <input
        type="search"
        name="country"
        id="country"
        className="form__input"
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          searchCountries(e.currentTarget.value)
        }
        placeholder="Search for a country..."
      />
    </article>
  );
};

export default Search;
