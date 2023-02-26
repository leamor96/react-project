import { Card, Col, Container, Row } from "react-bootstrap";
import gif1 from "../../images/app-info1.gif";
import gif2 from "../../images/app-info2.gif";
import gif3 from "../../images/app-info3.gif";
import "./AppInfo.css";

const AppInfo = () => {
  return (
    <div className="text-center p-5">
      <h1>HOW IT WORKS</h1>
      <h4>A few simple steps to find your way around our website</h4>
      <Container className="p-4">
        <Row>
          <Col xs={12} sm={6} md={4}>
            <Card className="card-sizing">
              <Card.Body className="m-3">
                <Card.Title className="text-left text-bg-secondary">
                  Go to Chores page
                </Card.Title>
                <Card.Text className="text-left">
                  Select all the relevant Chores for your household, you can
                  edit, delete or create a new Chores of your own.
                </Card.Text>
              </Card.Body>
              <Card.Img className="card-image" variant="bottom" src={gif1} />
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card className="card-sizing">
              <Card.Body className="m-3">
                <Card.Title className="text-left text-bg-secondary">
                  Click on the list icon
                </Card.Title>
                <Card.Text className="text-left">
                  You can add a chore to your costume list by clicking on the
                  list icon, it will change from ✕ to ✓
                </Card.Text>
              </Card.Body>
              <Card.Img className="card-image" variant="bottom" src={gif2} />
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card className="card-sizing">
              <Card.Body className="m-3">
                <Card.Title className="text-left text-bg-secondary">
                  Go to My Custom List page
                </Card.Title>
                <Card.Text className="text-left">
                  Review your selected chores, you can sort them by tags To make
                  it more organized
                </Card.Text>
              </Card.Body>
              <Card.Img className="card-image" variant="bottom" src={gif3} />
            </Card>
          </Col>
        </Row>
      </Container>

      <h2 className="p-4">
        Begin your journey with us, drink some coffee, read a quote for some
        inspiration and try follow some chores. We believe in you!
      </h2>
    </div>
  );
};

export default AppInfo;
