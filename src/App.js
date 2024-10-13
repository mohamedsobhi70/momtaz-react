import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import NotFound from "./Components/Globals/NotFound";
import Forteachers from "./Components/Forteachers/Forteachers";

function App() {

  return (
    <>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/for-teachers" element={<Forteachers />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
