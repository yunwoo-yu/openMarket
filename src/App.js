import HomePage from "./pages/Home/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFound/index";
import ProductPage from "./pages/Product/index";
import LoginPage from "./pages/Login/index";
import CartPage from "./pages/Cart/index";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import LayOut from "./components/Layout/Layout";
import SignUpPage from "./pages/SignUp/index";

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
            <Route path="/login?id=123#id=10" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
