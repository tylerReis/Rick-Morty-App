import { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";

function AboutPage() {
  const [show, setShow] = useState(true);

  const backgroundImageStyle = {
    backgroundImage:
      'url("https://i.ytimg.com/vi/4ctK1aoWuqY/maxresdefault.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    position: "relative",
  };

  const openMusicVideo = () => {
      window.open("https://www.youtube.com/watch?v=I1188GO4p1E", "_blank")
  }
  return (
    <>
      <div style={backgroundImageStyle}>
        <Container className="d-flex justify-content-center align-items-center vh-100">
          <Button onClick={() => openMusicVideo()} variant="primary" 
          style={{height: "10rem", 
                  width: "30rem", 
                  background:"rgba(154, 165, 26, .45)", 
                  border:"none",
                  borderRadius:"20px",}}>
            Click here idiot</Button>
        </Container>

        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header
            closeButton
            onClick={() =>
              alert(
                "Wh-who do you think you are? C-C-closing my modal window on my website"
              )
            }>
            <Modal.Title>It's time to get schwifty! Oh Oh!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Ah, Morty! W-well, listen here, Morty. Y-you want me to sum up the
              show? W-well, it's simple, Morty, it's simple. You see, Morty,
              it's about me, Rick Sanchez, the smartest guy in the universe, and
              my g-g-grandson, you, Morty. We go on these crazy adventures
              through dimensions and galaxies, Morty. We meet all sorts of
              bizarre creatures and face mind-bending challenges, Morty. It's
              all about the infinite possibilities, Morty! And, uh, the constant
              struggle between science and, uh, and, and, well, everything else,
              Morty. W-we're talking about existential crises, Morty! And, uh,
              family dysfunction, Morty! But, you know, at the end of the day,
              it's just me and you, Morty, and, uh, and sometimes your sister,
              and, uh, your mom, and, uh, your dad... but mostly me and you,
              Morty, going on these wild adventures! So, buckle up, Morty!
              W-we're gonna dive into the unknown, Morty, and, uh, and we're
              gonna have a heck of a time doing it, Morty! Wubba lubba dub dub!
            </p>
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button
              variant="primary"
              onClick={() => openMusicVideo()}>
              Get Schwifty!
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default AboutPage;
