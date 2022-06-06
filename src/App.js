import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import RequiredAuth from "./hoc/RequiredAuth";

function App() {
  return (
    <div className="App">
      {
        // Code here
      }

      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            {" "}
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <RequiredAuth>
                    <Home />
                  </RequiredAuth>
                }
              ></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
