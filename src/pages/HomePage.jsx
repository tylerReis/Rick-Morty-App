import { Image, Container, Alert } from "react-bootstrap";
function HomePage() {
  const backgroundImageStyle = {
    backgroundImage: 'url("https://cdn.vox-cdn.com/thumbor/9HfS_-ugBoHDaLskP6ssJ8_nIkY=/0x22:1584x851/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24415978/rick_and_morty_s4_image.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    position: 'relative',
  };

  const titleStyle = {
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    width: '80%',
    textAlign: 'center',
    fontSize: '4em', // Adjust the font size as needed
    background: 'rgba(0, 0, 0, 0.0)', // Transparent black background
    padding: '20px',
    borderRadius: '10px',
    border: 'none',
    color: 'white',
  };

  return (
    <div style={backgroundImageStyle}>
      <Container>
        <Alert variant="dark" style={titleStyle}>
          <strong className="mr-auto text-uppercase">Wubba Lubba Dub Dub!!!</strong>
        </Alert>
      </Container>
    </div>
  );
}

export default HomePage;

//   const backgroundImageStyle = {
//     backgroundImage: 'url("https://cdn.vox-cdn.com/thumbor/9HfS_-ugBoHDaLskP6ssJ8_nIkY=/0x22:1584x851/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24415978/rick_and_morty_s4_image.png")',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     minHeight: '100vh',
//     position: 'relative', // Make the div position relative for absolute positioning of the title
//   };

//   const titleStyle = {
//     position: 'absolute',
//     top: '15%', // Center vertically
//     left: '50%', // Center horizontally
//     transform: 'translate(-50%, -50%)', // Center both vertically and horizontally
//     color: 'white',
//     fontSize: '5em',
//     textAlign: 'center',
//     textTransform: 'uppercase',
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(0, 0, 0, 0.0)', // Semi-transparent black background
//     padding: '20px',
//     borderRadius: '10px',
//   };

//   return (
//     <div style={backgroundImageStyle}>
//       <div style={titleStyle}>
//        Wubba Lubba Dub Dub
//       </div>
//     </div>
//   );
// }

