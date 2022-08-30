import { Outlet } from "react-router-dom";
import Appbar from "../components/Appbar";

const BikinApiPage = () => {
  return (
    <div>
      <Appbar routePrefix="/bikin-api" logoName="Bikin API" />
      <Outlet />
    </div>
  );
};

export default BikinApiPage;
