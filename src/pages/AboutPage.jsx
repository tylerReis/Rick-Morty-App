import { Button, Modal } from "react-bootstrap";

function AboutPage() {
  return (
    <>
      <div className="modalContainer">
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Its like totally Rick and Morty bro</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>
                Ah, Morty! W-well, listen here, Morty. Y-you want me to sum up
                the show? W-well, it's simple, Morty, it's simple. You see,
                Morty, it's about me, Rick Sanchez, the smartest guy in the
                universe, and my g-g-grandson, you, Morty. We go on these crazy
                adventures through dimensions and galaxies, Morty. We meet all
                sorts of bizarre creatures and face mind-bending challenges,
                Morty. It's all about the infinite possibilities, Morty! And,
                uh, the constant struggle between science and, uh, and, and,
                well, everything else, Morty. W-we're talking about existential
                crises, Morty! And, uh, family dysfunction, Morty! But, you
                know, at the end of the day, it's just me and you, Morty, and,
                uh, and sometimes your sister, and, uh, your mom, and, uh, your
                dad... but mostly me and you, Morty, going on these wild
                adventures! So, buckle up, Morty! W-we're gonna dive into the
                unknown, Morty, and, uh, and we're gonna have a heck of a time
                doing it, Morty! Wubba lubba dub dub!
              </p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
