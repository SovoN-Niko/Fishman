import './App.css';
import React, { useState, useEffect  } from "react";
import Login from'./pages/authentication/LoginForm.js'
import Register from'./pages/authentication/RegisterForm.js'
import Forgot from'./pages/authentication/ForgotForm.js'
import Home from "./pages/home/home.js";
import MainPage from "./pages/home/MainPage.js";

function App() {

  const [page, setPage] = useState("login");
  const [token, setToken] = useState();

  useEffect(() => {
    const auth = localStorage.getItem("auth_token");
    setToken(auth);
  }, [token]);

  const chosePage = () => {
    if (page === "login") {
      return <Login setPage={setPage} />;
    }
    if (page === "forgot") {
      return <Forgot setPage={setPage} />;
    }
    if (page === "register") {
      return <Register setPage={setPage} />;
    }
  };

  const pages = () => {
    if (token == null) {
      return (
        <div className="min-h-screen bg-blue-400 flex justify-center items-center">
          <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            {chosePage()}
          </div>
        </div>
      );
    } else {
      return <MainPage />;
    }
  };

  return <React.Fragment>{pages()}</React.Fragment>;
}

export default App;
