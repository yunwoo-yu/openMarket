import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsProvider from "./store/products/ProductsProvider";

function App() {
  return (
    <>
      <ProductsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" />
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </>
  );
}

export default App;
