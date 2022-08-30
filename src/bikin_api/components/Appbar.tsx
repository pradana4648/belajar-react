import { Link, NavLink, useNavigate } from "react-router-dom";
import "./appbar.css";

interface IAppbarProps {
  logoName?: string;
  routePrefix: string;
}

const Appbar: React.FC<IAppbarProps> = ({ routePrefix, logoName }) => {
  const navigate = useNavigate();
  const menus = ["posts", "albums", "comments"];

  return (
    <div className="flex flex-row bg-black text-white">
      <button
        style={{
          all: "unset",
          fontSize: "1.5em",
          textTransform: "uppercase",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        {logoName}
      </button>
      <ul>
        {menus.map((menu, index) => {
          return (
            <li key={index}>
              <Link to={routePrefix + "/" + menu}>{menu}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Appbar;
