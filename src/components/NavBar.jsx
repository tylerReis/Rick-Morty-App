import { useNavigate, } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

function NavBar({setPageUrl}) {
    const navigate = useNavigate();
    return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Navbar.Brand>
          <Button variant="Primary" style={{fontSize:'2rem'}} onClick={() => navigate("/") }>Rick and Morty</Button>
          </Navbar.Brand>
          <Nav>
            <Button variant="link" onClick={() => navigate("/about/") }>About</Button>
          </Nav>
          <Nav>
            <Button variant="link" onClick={() => {
              navigate(`/characters/${1}`)
              setPageUrl('https://rickandmortyapi.com/api/character/')
              }}>
                Characters
                </Button>
          </Nav>
          <Nav>
            <Button variant="link" onClick={() => navigate("/favorites/") }>Favorites</Button>
          </Nav>
        </Navbar>

    )
}
export default NavBar;