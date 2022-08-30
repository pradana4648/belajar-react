import { Link } from "react-router-dom";
import "./appbar.css";

const Appbar = () => {
  const menus = ["posts", "albums", "comments"];

  return (
    <div className="flex flex-row bg-black text-white">
      <h4>JSONPLACEHOLDER.</h4>
      <ul>
        {menus.map((menu, index) => {
          return (
            <li key={index}>
              <Link to={menu}>{menu}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Appbar;
