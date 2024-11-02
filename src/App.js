import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import NotFound from "./Components/Globals/NotFound";
import Forteachers from "./Components/Forteachers/Forteachers";
import Exploreteachers from "./Components/Exploreteachers/Exploreteachers";
import Support from "./Components/Support/Support";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import RegLayout from "./Components/Globals/RegLayout";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";

function App() {
  const location = useLocation();

  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/forget-password';

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/for-teachers" element={<Forteachers />} />
          <Route path="/explore-teacher" element={<Exploreteachers />} />
          <Route path="/support" element={<Support />} />
          <Route path="/login" element={<RegLayout><Login /></RegLayout>} />
          <Route path="/register" element={<RegLayout><Register /></RegLayout>} />
          <Route path="/forget-password" element={<RegLayout><ForgetPassword /></RegLayout>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
