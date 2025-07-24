import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/organisms/Loading";
import NavBar from "./components/organisms/NavBar";
import Footer from "./components/organisms/Footer";
import Profile from "./components/organisms/Profile";
import Cart from "./components/organisms/Cart";
import Checkout from "./components/organisms/Checkout";
import CheckoutSuccess from "./components/organisms/CheckoutSuccess";
import CheckoutCancel from "./components/organisms/CheckoutCancel";
import Admin from "./components/organisms/Admin";
import ProtectedRoute from "./components/organisms/ProtectedRoute";
import Home from "./views/Home";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error, isAuthenticated, loginWithRedirect } = useAuth0();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, 
        cacheTime: 10 * 60 * 1000
      },
    },
  });

  useEffect(() => {
    if (!isLoading && !isAuthenticated){
      loginWithRedirect();
    }
  },[isLoading])

  if (error) return <div>Oops... {error.message}</div>;
  if (isLoading) return <Loading />;  

  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <div id="app" className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Profile/>}/>
            <Route path="/carrito" element={<Cart/>}/>
            <Route path="/pago" element={<Checkout/>}/>
            <Route path="/checkout/success" element={<CheckoutSuccess />} />
            <Route path="/checkout/cancel" element={<CheckoutCancel />} />
            <Route path="/admin" element={<ProtectedRoute><Admin/></ProtectedRoute>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
};

export default App;