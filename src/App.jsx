import { Route, Routes } from "react-router";
import Header from "./components/Header";
import HomePage from "./pages/Home/HomePage";
import Residential from "./pages/Residentail/Residential";
import Commercial from "./pages/Commercial/Commercial";
import NewProjects from "./pages/NewProjects/NewProjects";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
import Agents from "./pages/Agents/Agents";
import Footer from "./components/Footer";
import Login from "./pages/Login/Login";
import "./assets/all.min.css";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/newprojects" element={<NewProjects />} />
        <Route path="/agents" element={<Agents />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
