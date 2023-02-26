import { Container, Row, Col } from "react-bootstrap";
import home from "../../lottie/home.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col sm={7} className="p-5 mt-xl-1">
          <h1>Welocome to HOUSEkeep,</h1>
          <h5>
            Improve the value of your home, avoid early replacement costs, and
            keep your home healthy and safe by staying in control of home
            maintenance.
          </h5>
          <h5>
            Use HOUSEkeep Chores feature to track all the small fix it projects
            around the home.
          </h5>
          <br></br>
          <Link to="/about" className="btn btn-info text-light">
            More about HOUSEkeep
          </Link>
        </Col>
        <Col sm={5} className="mt-4">
          <Lottie animationData={home} />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
