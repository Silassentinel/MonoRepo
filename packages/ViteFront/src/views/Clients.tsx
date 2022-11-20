// #region imports
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
// import ClientComponent from "../components/Client/ClientComponent";
// import clientType from "../types/Client";
// import clientData from "../data/Clients.json";
// #endregion

// const { clients } = clientData;
// console.log(clients);

/*
 * {
            clients.map((client: clientType, index) => (
              <>
                <ClientComponent
                  Description={ client.Description }
                  Img={ client.Img }
                  Location={ client.Location }
                  Name={ client.Name }
                  Skills={ client.Skills }
                  Tools={ client.Tools }
                  Id={ client.Id }
                  key={ index.toString() + client.Id + "abc" } />
              </>
            ))
          }
 */
/**
 * The client page
 * @returns {JSX.Element}
 */
function Clients() {
  return (
    <Container>
      <Carousel fade className="justify-content-center bg-dark align-content-center">
        <Carousel.Item className="align-content-center">
          <img
            className="d-block w-25 h-25"
            src="https://via.placeholder.com/150"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-25 h-25"
            src="https://via.placeholder.com/150"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-25 h-25"
            src="https://via.placeholder.com/150"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Clients;
