import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Header from "./components/Header";

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/edit/:id" element={<Products />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;