import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFountPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import LayOut from "./components/Layout/Layout";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayOut />}>
              <Route path="" element={<HomePage />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
