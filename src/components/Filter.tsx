import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Filter: React.FC = () => {
  const { setCountries } = useGlobalContext();
  const [isVisible, setVisibility] = useState<boolean>(false);
  const [activeRegion, setActiveRegion] = useState<any>(null);
  const regions = [
    {
      label: "All",
      name: "all",
    },
    {
      label: "Africa",
      name: "africa",
    },
    { label: "Americas", name: "americas" },
    {
      label: "Asia",
      name: "asia",
    },
    { label: "Europe", name: "europe" },
    { label: "Oceania", name: "oceania" },
  ];

  const fetchRegion = async (region: any) => {
    if (region === "all") {
      const url = `https://restcountries.com/v2/all`;
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
    } else {
      const url = `https://restcountries.com/v2/region/${region}`;
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
    }
  };

  const addDropdown = () => {
    return isVisible ? setVisibility(false) : setVisibility(true);
  };
  const removeDropdown = () => {
    return isVisible ? setVisibility(false) : setVisibility(true);
  };

  return (
    <article className="form__filter">
      <summary
        onClick={() => addDropdown()}
        className="form__filter__summary flex flex-ai-c flex-jc-sb"
      >
        {activeRegion === "All" || !activeRegion
          ? "Filter by Region"
          : activeRegion}
        <FaChevronDown
          className={`form__filter__icon ${isVisible ? "visible" : ""}`}
        />
      </summary>
      {isVisible ? (
        <div className="region-list">
          {regions.map((region) => (
            <li
              onClick={() => {
                fetchRegion(region.name);
                setActiveRegion(region.label);
                removeDropdown();
              }}
              value={region.name}
              key={region.label}
            >
              {region.label}
            </li>
          ))}
        </div>
      ) : null}
    </article>
  );
};

export default Filter;
