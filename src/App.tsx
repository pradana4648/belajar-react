import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import MenuList from "./components/MenuList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<MenuList />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
