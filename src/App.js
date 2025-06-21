import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/organisms/Loading";
import NavBar from "./components/organisms/NavBar";
import Footer from "./components/organisms/Footer";
import Home from "./views/Home";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) return <div>Oops... {error.message}</div>;
  if (isLoading) return <Loading />;

  return (
    <Router>
      <div id="app" className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;