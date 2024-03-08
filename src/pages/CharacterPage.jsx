import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Container,
  Row,
  Card,
  Col,
  CardHeader,
  ListGroup,
  CardBody,
} from "react-bootstrap";

function CharacterPage() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  const [firstEpisode, setFirstEpisode] = useState({});

  const charResponse = async () => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    setCharacter(response.data);
    episodeResponse(response.data.episode[0]);
  };

  const episodeResponse = async (eps) => {
    const epsRes = await axios.get(eps);
    console.log(epsRes);
    setFirstEpisode(epsRes.data);
  };

  useEffect(() => {
    charResponse();
  }, []);

  console.log(firstEpisode);

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={4} className="mb-4">
            <Card
              bg="secondary"
              text="light"
              style={{ width: "26rem", marginTop: "5rem" }}>
              <Card.Img variant="top" src={character.image} />
              <div
                style={{
                  backgroundColor:
                    character.status == "Alive" ? "green" : "red",
                }}>
                <Card.Header
                  className={
                    character.status == "Alive" ? "text-light" : "text-dark"
                  }>
                  Status: {character.status}
                </Card.Header>
              </div>
              <Card.Body>
                    <Card.Title className={"fw-bold text-large"}>{character.name}</Card.Title>
                </Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item variant="info">Species: {character.species}</ListGroup.Item>
                    <ListGroup.Item variant="info">Gender: {character.gender}</ListGroup.Item>
                    <ListGroup.Item variant="info">Origin: {character.origin && character.origin.name}</ListGroup.Item>
                    <ListGroup.Item variant="info">Location: {character.location && character.location.name}</ListGroup.Item>
                    <ListGroup.Item variant="info">First Episode: {firstEpisode.name}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                <Button variant="primary" onClick={() => console.log("This will favorite")}> 
                  Details
                    
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CharacterPage;
