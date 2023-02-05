import Header from "./components/Header";
import Search from "./components/Search";
import { useGlobalContext } from "./context";
import AllCountries from "./components/AllCountries";
import FilteredCountries from "./components/FilteredCountries";

const App: React.FC = () => {
  const { searchTerm } = useGlobalContext();

  return (
    <>
      <Header />
      <Search />
      {searchTerm.length > 0 ? <FilteredCountries /> : <AllCountries />}
    </>
  );
};

export default App;
