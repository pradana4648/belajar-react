import { Outlet } from "react-router-dom";
import Appbar from "../components/Appbar";

const Home = () => {
  return (
    <div>
      <Appbar />
      <Outlet />
    </div>
  );
};

export default Home;
