import CharacterCard from "../components/CharacterCard";
import { useState, useEffect } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";
import { Button, Container, Row } from "react-bootstrap";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const { setPageUrl, pageUrl, setFavorites, favorites } = useOutletContext();

  const checkedUrl = pageUrl
    ? pageUrl
    : "https://rickandmortyapi.com/api/character/";

  const callResponse = async () => {
    try {
      const response = await axios.get(checkedUrl);
      setCharacters(response.data.results);
      setNextPage(response.data.info.next);
      setPrevPage(response.data.info.prev);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    
    callResponse();
  }, [pageUrl]);
console.log(favorites)
  return (
    <>
      <Container>
      <Container className="d-flex justify-content-center align-items-center mt-md-2">
          <Row
            className="justify-content-center text-center"
            style={{ height: "100%" }}>
            <h1>All of the Characters in the Known Universe</h1>
          </Row>
        </Container>
        <Container className="d-flex flex-row justify-content-center align-items-center mt-md-3">
          {prevPage && (
            <Button
              className="mr-2 mb-2 mb-md-4"
              variant="secondary"
              onClick={() => setPageUrl(prevPage)}>
              Prev Page
            </Button>
          )}
          {nextPage && (
            <Button
              className="mb-2 mb-md-4"
              variant="secondary"
              onClick={() => setPageUrl(nextPage)}>
              Next Page
            </Button>
          )}
        </Container>
        
        <Row>
          {characters.map((char, idx) => (
            <CharacterCard
              key={idx}
              id={char.id}
              image={char.image}
              name={char.name}
              status={char.status}
              species={char.species}
              origin={char.origin.name}
              setFavProp={setFavorites}
              favProp={favorites}
            />
          ))}
        </Row>

        <div className="mt-4 text-center">
          {prevPage && (
            <Button className="mr-2 mb-2 mb-md-3" variant="secondary" onClick={() => setPageUrl(prevPage)}>
              Prev Page
            </Button>
          )}
          {nextPage && (
            <Button className="mb-2 mb-md-3" variant="secondary" onClick={() => setPageUrl(nextPage)}>
              Next Page
            </Button>
          )}
        </div>
      </Container>
    </>
  );
}

export default Characters;

// const myPromises = [];
//             for (let i = 1; i <= 5; i++) {
//                 const url = `https://rickandmortyapi.com/api/character/?page=${i}`;
//                 const promiseObject = axios.get(url);
//                 myPromises.push(promiseObject);
//                 console.log("promise objects ", promiseObject)
//             }

//             const allResponses = await Promise.all(myPromises);

//             const data = allResponses.reduce( (acc, page) => {

//                 acc = [...acc, ...page.data.results];
//                 return acc;
//             }, []);
//             console.log("data", data);

// console.log(numOfPages)

// axios
//     .request(`https://rickandmortyapi.com/api/character/`)
//     .then((reponse) => response.data.info.next ?)
//     .then(function (response) {
//         let responseData = response.data
//         console.log(responseData)
//     })

// }
// callResponse()

// eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from 'react';
// import { Card, Container, Row, Col, Button } from 'react-bootstrap';
// import axios from 'axios';
// function CharactersPage() {
//   const [characters, setCharacters] = useState([]);
//   const [nextPage, setNextPage] = useState('');
//   useEffect(() => {
//     const fetchCharacters = async () => {
//       try {
//         const response = await axios.get('https://rickandmortyapi.com/api/character');
//         setCharacters(response.data.results);
//         setNextPage(response.data.info.next);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchCharacters();
//   }, []);
//   const handleNextPage = async () => {
//     try {
//       const response = await axios.get(nextPage);
//       setCharacters(response.data.results);
//       setNextPage(response.data.info.next);
//       window.scrollTo(0, 0); // Scroll to the top of the page
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
//   return (
//     <Container>
//       <h1 className="mt-5 mb-4">Rick and Morty Characters</h1>
//       <Row>
//         {characters.map(character => (
//           <Col md={4} className="mb-4" key={character.id}>
//             <Card>
//               <Card.Img variant="top" src={character.image} />
//               <Card.Body>
//                 <Card.Title>{character.name}</Card.Title>
//                 <Card.Text>Status: {character.status}</Card.Text>
//                 <Card.Text>Species: {character.species}</Card.Text>
//                 <Card.Text>Origin: {character.origin.name}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//       {/* nextPage && is a conditional rendering technique in JavaScript often used in React applications, known as the "short-circuit" evaluation. */}
//       {nextPage && (
//         <div className="mt-4 text-center">
//           <Button onClick={handleNextPage} variant="primary">Next Page</Button>
//         </div>
//       )}
//     </Container>
//   );
// }
// export default CharactersPage;
