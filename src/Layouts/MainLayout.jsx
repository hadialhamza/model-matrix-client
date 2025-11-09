import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Outlet (children of this layout will be rendered here) */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
