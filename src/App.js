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
import PrivateRotuer from "./components/router/PrivateRouter";
import { useSelector } from "react-redux";
import OrderPage from "./pages/Order";

const queryClient = new QueryClient();

function App() {
  const accessToken = useSelector((state) => state.user.token);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<LayOut />}>
              <Route path="" element={<HomePage />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/order" element={<OrderPage />} />
            </Route>
            <Route
              path="/login"
              element={
                <PrivateRotuer authenticated={accessToken}>
                  <LoginPage />
                </PrivateRotuer>
              }
            />
            <Route
              path="/signup"
              element={
                <PrivateRotuer authenticated={accessToken}>
                  <SignUpPage />
                </PrivateRotuer>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
