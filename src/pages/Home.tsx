import { Outlet } from "react-router-dom";
import Appbar from "../bikin_api/components/Appbar";

const Home = () => {
  return (
    <div>
      <Appbar />
      <Outlet />
    </div>
  );
};

export default Home;
