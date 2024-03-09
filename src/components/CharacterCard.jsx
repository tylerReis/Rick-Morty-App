import { Card, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CharacterCard({
  name,
  status,
  species,
  origin,
  id,
  image,
  favProp,
  setFavProp,
  deleteProp
}) {
  const navigate = useNavigate();

  const routeToCharPage = (id) => {
    navigate(`/character/${id}`);
  };

  const favChecker = (favToCheckId) => {
     let ans = true
     for (const favChar of favProp){
        if (favChar.id == favToCheckId){
            ans = false
        }
     }
     return ans
  }
  const addFav = () => {
    const newFav = {
        id,
        name,
        image,
        origin,
        species,
        status,
      }
        
    if (favProp.length < 6 && favChecker(id)){
        
        const updatedFavs = [...favProp, newFav]
        setFavProp(updatedFavs)
    }
    else if (favChecker(id)) {
        alert("You already have 6 favorites!")
        
    }
    else{
        alert("Already favorited!")
    }
}
  

  return (
    <>
      <Col md={4} className="mb-4" key={id}>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Status: {status}</Card.Text>
            <Card.Text>Species: {species}</Card.Text>
            <Card.Text>Origin: {origin}</Card.Text>
            <Button variant="primary" onClick={() => routeToCharPage(id)}>
              
              Details
            </Button>
            {favChecker(id) &&<Button
              variant="primary"
              onClick={addFav}>
              Add to Favorites
            </Button>}
            {!favChecker(id) && deleteProp && <Button variant="danger" onClick={()=>deleteProp(id)}>Delete</Button>}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default CharacterCard;
