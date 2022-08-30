import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import MenuList from "./components/MenuList";
import BikinApiPage from "./bikin_api/pages";
import Post from "./bikin_api/components/Post";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<MenuList />}></Route>
        </Route>
        <Route path="/bikin-api" element={<BikinApiPage />}>
          <Route path="posts" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
