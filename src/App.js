import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsProvider from "./store/products/ProductsProvider";
import NotFound from "./pages/NotFount";
import Product from "./pages/Product";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <ProductsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </>
  );
}

export default App;
