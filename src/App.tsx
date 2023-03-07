import Home from "./components/Home";
import Header from "./components/Header";
import Detail from "./components/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
