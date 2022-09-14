import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsProvider from "./store/products/ProductsProvider";
import NotFoundPage from "./pages/NotFountPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import UserProvider from "./store/user/UserProvider";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <UserProvider>
        <ProductsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </BrowserRouter>
        </ProductsProvider>
      </UserProvider>
    </>
  );
}

export default App;
