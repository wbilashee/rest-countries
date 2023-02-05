import React from "react";
import { HiSearch } from "react-icons/hi";
import { useGlobalContext } from "../context";

const Search = () => {
  const { searchCountries } = useGlobalContext();
  return (
    <form className="form container container--pt">
      <div className="form__search">
        <HiSearch className="form__search__icon" />
        <input
          type="search"
          name="country"
          id="country"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            searchCountries(e.currentTarget.value)
          }
          placeholder="Search for a country..."
        />
      </div>
    </form>
  );
};

export default Search;
