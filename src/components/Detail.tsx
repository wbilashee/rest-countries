import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";

const Detail: React.FC = () => {
  const { name } = useParams();
  const [country, setCountry] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [borderCountries, setBorderCountries] = useState<any>();

  function countryBorderName(country: any) {
    let arrBorderCountries: Array<string> = [];
    country?.borders.map(async (code: any) => {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${code}`
      );
      const data = await response.json();
      arrBorderCountries.push(data[0].name.common);
    });
    setTimeout(() => {
      setBorderCountries(arrBorderCountries);
    }, 1500);
  }

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v2/name/${name}?fullText=true`
        );
        const data = await response.json();
        setCountry(data[0]);
        countryBorderName(data[0]);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchCountry();
  }, [name]);

  return (
    <main>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <section className="detail container container--py">
          <Link to="/" className="back-button button flex flex-ai-c flex-jc-c">
            <HiArrowNarrowLeft className="back-button__icon" /> Back
          </Link>
          <article className="detail__country grid grid-ai-c">
            <img src={country.flags?.png} alt={country.name?.common} />
            <section className="detail__block__info flex">
              <h2>{name}</h2>
              <div className="detail__block flex">
                <ul className="detail__block__one">
                  <li>
                    <span>Native Name: </span>
                    {country.nativeName}
                  </li>
                  <li>
                    <span>Population: </span>
                    {country.population.toLocaleString()}
                  </li>
                  <li>
                    <span>Region: </span>
                    {country.region}
                  </li>
                  <li>
                    <span>Sub Region: </span>
                    {country.subregion}
                  </li>
                  <li>
                    <span>Capital: </span>
                    {country.capital}
                  </li>
                </ul>
                <ul className="detail__block__two">
                  <li>
                    <span>Top Level Domain: </span> {country.topLevelDomain}
                  </li>
                  <li>
                    <span>Currencies: </span>
                    {country.currencies
                      ? country.currencies[0]?.name
                      : "Unknown"}
                  </li>
                  <li>
                    <span>Languages: </span> {country.languages[0]?.name}
                  </li>
                </ul>
              </div>
              <section className="border-countries">
                <span>Border Countries: </span>
                {borderCountries?.length ? (
                  borderCountries.map((country: any, index: number) => (
                    <Link key={index} to={`/${country}`} className="border-country">
                      {country}{" "}
                    </Link>
                  ))
                ) : (
                  <>No Borders...</>
                )}
              </section>
            </section>
          </article>
        </section>
      )}
    </main>
  );
};

export default Detail;
