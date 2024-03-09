import { useOutletContext } from "react-router-dom"
import CharacterCard from "../components/CharacterCard";
import { Container, Row, Button } from "react-bootstrap";
function FavoritesPage() {
    const {setFavorites, favorites} = useOutletContext();

    

    const deleteFav = (deleteId) => {
        let newFavs = favorites.filter((fav) => {
            if (fav.id === deleteId){
                return false
            }
            return true
        
        })


        setFavorites(newFavs)
        

    }
        console.log(favorites)
    return (
        <>
        <Container>
        <Container className="d-flex justify-content-center align-items-center mt-md-2">
          <Row
            className="justify-content-center text-center"
            style={{ height: "100%" }}>
            <h1>Favorite Characters</h1>
          </Row>
        </Container>
        <Row>
          {favorites.map((char, idx) => {
            
            return (
            <>
            <CharacterCard
              key={idx}
              id={char.id}
              image={char.image}
              name={char.name}
              status={char.status}
              species={char.species}
              origin={char.origin.name}
              favProp={favorites}
              setFavProp={setFavorites}
              deleteProp={deleteFav}
            />
           
            </>
            )})}
        </Row>






        </Container>

    
        
        
        
        
        </>
    )
}

export default FavoritesPage