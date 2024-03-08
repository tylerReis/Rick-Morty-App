import { Outlet} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const [favorites, setFavorites] = useState([])
  const [pageUrl, setPageUrl] = useState();
  

  return (
    <>
      <div>
        <NavBar setPageUrl={setPageUrl}/>
        <Outlet context={{pageUrl, setPageUrl, favorites, setFavorites} }/>
      </div>
    </>
  );
}

export default App;
