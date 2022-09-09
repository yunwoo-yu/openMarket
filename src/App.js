import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsProvider from "./store/products/ProductsProvider";
import ProductsDetail from "./components/Products/ProductsDetail/ProductsDetail";
import MainHeader from "./components/MainHeader/MainHeader";
import NotFound from "./pages/NotFount";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <ProductsProvider>
        <BrowserRouter>
          <MainHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </>
  );
}

export default App;
