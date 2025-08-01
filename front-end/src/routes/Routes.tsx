import RegisterStartups from "../pages/RegisterStartups";
import Battles from "../pages/Battles";
import Stats from "../pages/Stats";
import Menu from "../pages/Menu";
import History from "../pages/History";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Menu />}></Route>
        <Route path="/register" element={<RegisterStartups />}></Route>
        <Route path="/battles" element={<Battles />}></Route>
        <Route path="/stats" element={<Stats />}></Route>
        <Route path="/history" element={<History />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
