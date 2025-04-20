import RegisterStartups from "../pages/RegisterStartups";
import Battles from "../pages/Battles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterStartups />}></Route>
        <Route path="/battles" element={<Battles />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
