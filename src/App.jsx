import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function App() {

  const [pageUrl, setPageUrl] = useState();
  const navigate = useNavigate();

  // const pageNavigator = (url) => {
  //   navigate(url)}
  return (
    <>
      <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Navbar.Brand>
              <Link to={"/"} style={{
                textDecoration: 'none',
                paddingLeft: "10px",
                color: "white"
              }}>Rick and Morty</Link>
          </Navbar.Brand>
          <Nav>
            <Button onClick={() => navigate("/about/") }>About</Button>
            {/* <Link to={"about/"} style={{
                textDecoration: 'none',
                marginLeft: "2px",
                marginRight: "10px",
                color: "white"
              }}>About</Link> */}
          </Nav>
          <Nav>
            <Button onClick={() => {
              navigate(`/characters/${1}`)
              setPageUrl('https://rickandmortyapi.com/api/character/')
              }}>
                Characters
                </Button>
            {/* <Link to={"/characters/https://rickandmortyapi.com/api/character"} style={{
                textDecoration: 'none',
                color: "white"
              }}>Characters</Link> */}
          </Nav>
        </Navbar>
        <Outlet context={{pageUrl, setPageUrl}}/>
      </div>
    </>
  );
}

export default App;
