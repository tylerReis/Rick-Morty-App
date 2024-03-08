import {Card, Col, Container, Row, Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom";


function CharacterCard ({name, status, species, origin, id, image}) {
    const navigate = useNavigate();

    const routeToCharPage = (id) => {
        navigate(`/character/${id}`)
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
                        </Card.Body>
                        </Card>
                    </Col>
                
            </>
            
       
        
        


    )
}

export default CharacterCard;