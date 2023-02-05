import React, {
  useContext,
  createContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { Country, AppContextType } from "./model";

const AppContext = createContext<AppContextType | undefined>(undefined);
const url = "https://restcountries.com/v3.1/all";

type Props = {
  children?: React.ReactNode;
};

const AppProvider: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filtered, setFiltered] = useState<Country[]>([]);
  const [foundFilter, setFoundFilter] = useState<boolean>(true);

  const fetchCountries = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        const newCountries = data.map((item: any) => {
          const { flags, name, population, region, capital } = item;
          return {
            flag: flags?.png,
            name: name?.common,
            population: population,
            region: region,
            capital: capital?.[0],
          };
        });
        setCountries(newCountries);
      } else {
        setCountries([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  const searchCountries = (searchValue: string) => {
    setSearchTerm(searchValue);
    if (searchTerm) {
      setFiltered(
        countries.filter((country) =>
          Object.values(country)
            .join("")
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        )
      );
      setFoundFilter(true);
      if (filtered.length <= 0) {
        setFoundFilter(false);
      }
    } else {
      setFiltered(countries);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        countries,
        setCountries,
        searchTerm,
        setSearchTerm,
        filtered,
        setFiltered,
        foundFilter,
        setFoundFilter,
        searchCountries,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext) as AppContextType;
};

export { AppProvider, useGlobalContext };
