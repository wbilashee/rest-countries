export type Country = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

export type AppContextType = {
  isLoading: boolean;
  countries: Country[];
  searchTerm: string;
  filtered: Country[];
  foundFilter: boolean;
  searchCountries: (searchValue: string) => void;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
  setFiltered: React.Dispatch<React.SetStateAction<Country[]>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setFoundFilter: React.Dispatch<React.SetStateAction<boolean>>;
};
