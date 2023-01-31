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
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
};
