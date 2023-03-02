import { Container, Row, Col } from "react-bootstrap";
import ac from "../../lottie/ac.json";
import cleaning from "../../lottie/cleaning.json";
import gardening from "../../lottie/gardening.json";
import painting from "../../lottie/painting.json";
import repair from "../../lottie/repair.json";
import security from "../../lottie/security.json";
import Lottie from "lottie-react";
import { Accordion } from "react-bootstrap";
import "./AboutUs.css"


const AboutUs = () => {
  return (
    <Container className="p-xl-5 p-3 mt-4 mt-md-0">
      <Row className="text-center p-xl-4">
        <h1>About Us</h1>
        <p>
          HOUSEkeep helps you orgenize a costume household chores list to make
          sure you maintain your house properly.
        </p>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="accordion-header">
              Why a household chores list is important?
            </Accordion.Header>
            <Accordion.Body className="accordionBody">
              A household chores list helps you and the members of your
              household put upkeep on autopilot. Not only does creating one
              ensure that everything gets done on time, it also takes the
              guesswork out of navigating conversations about cleaning. It can
              be awkward to broach this subject with the people you live with,
              and if you haven’t practiced communicating about household tasks,
              you might be tempted to avoid it, eventually compounding the
              issue. That’s why creating this list is essential.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              How to create a household chores list?
            </Accordion.Header>
            <Accordion.Body className="accordionBody">
              Whether you live alone, with a partner, or with roommates, the
              process for creating a chore list is pretty consistent: You
              compile a comprehensive list of all the tidying and cleaning tasks
              that needs to be completed for your home to feel clean.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What to include on a household chores list?
            </Accordion.Header>
            <Accordion.Body className="accordionBody">
              You’ll want to include both personal chores and communal chores.
              Personal chores are things you need to do to keep your own space
              clean and tidy; communal chores are those that go towards the
              spaces you share. You can organize your master list by room or
              type of task, but a more action-oriented method of organization is
              grouping by frequency. Everyone’s list will be a bit different
              depending on what type of space you live in and what’s important
              to the members of your household. Below are some common types of
              chores to get you started.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>

      <Row>
        <Col sm={4}>
          <Lottie animationData={repair} className="desktop" />
        </Col>
        <Col sm={8} className="p-5 mt-4">
          <h2>Home Repair & Maintenance</h2>
          <h5>
            You may think some home repairs are out of your league, but even
            beginner DIYers can handle many of these fixes—and save a lot of
            money in the process! Saving money isn't the only factor to consider
            when tackling a home improvement project. Know when it pays to call
            a professional.
          </h5>
        </Col>
        <Col sm={4}>
          <Lottie animationData={repair} className="mobile" />
        </Col>
      </Row>
      <Row>
        <Col sm={8} className="p-5 mt-3">
          <h2>Gardening, Lawn maintenance & Weeding</h2>
          <h5>
            Gardening is a much-loved activity but unfortunately, due to our
            busy lifestyles, we don't all have the time to beautify our outdoor
            spaces. So how exactly can we give our garden the attention it
            deserves? Make sure to learn some info to help you see greater
            rewards from your garden.
          </h5>
        </Col>
        <Col sm={4} className="mt-3">
          <Lottie animationData={gardening} />
        </Col>
      </Row>
      <Row>
        <Col sm={3} className="mt-4">
          <Lottie animationData={painting} className="desktop" />
        </Col>
        <Col sm={9} className="p-5 mt-3">
          <h2>Exterior & Enterior Painting</h2>
          <h5>
            A fresh coat of exterior paint can revitalize a home’s look. Regular
            painting is also a necessary component of every home maintenance
            schedule. Painting an entire house is a highly worthwhile, yet
            daunting, project. An average-sized home takes 120 hours to paint.
            Breaking this sprawling job into smaller, easily manageable
            components is the key to getting this project done efficiently.
          </h5>
        </Col>
        <Col sm={3} className="mt-4">
          <Lottie animationData={painting} className="mobile" />
        </Col>
      </Row>
      <Row>
        <Col sm={8} className="p-5 mt-3">
          <h2>Maintaining Your Air Conditioner</h2>
          <h5>
            An air conditioner's filters, coils, and fins require regular
            maintenance for the unit to function effectively and efficiently
            throughout its years of service. Neglecting necessary maintenance
            ensures a steady decline in air conditioning performance while
            energy use steadily increases. Make sure to add this info to your
            costume list.
          </h5>
        </Col>
        <Col sm={4} className="mt-4">
          <Lottie animationData={ac} />
        </Col>
      </Row>
      <Row>
        <Col sm={4} className="mt-0">
          <Lottie animationData={cleaning} className="desktop" />
        </Col>
        <Col sm={8} className="p-5 mt-5">
          <h2>Deep Home Cleaning</h2>
          <h5>
            When all those cleaning tasks we tend to avoid start piling up – the
            oven makes smoke signals, or the inside of the microwave looks like
            your kids finger painting project—it might be time for a little
            help. While it may be a messy job, the payoff is huge. So, stop
            putting this necessary cleaning aside!
          </h5>
        </Col>
        <Col sm={4} className="mt-0">
          <Lottie animationData={cleaning} className="mobile" />
        </Col>
      </Row>
      <Row>
        <Col sm={8} className="p-5 mt-3">
          <h2>Home Security System</h2>
          <h5>
            Your home is a special place. It keeps you and your family protected
            and safe. Investing in a good home security system not only gives
            back to your home the protection it needs, but helps your house do
            its job even better. Home security systems provide protection
            against any number of threats to your home and your family’s safety
            by watching out for things like burglary, fire, flooding, suspicious
            activity and more.
          </h5>
        </Col>
        <Col sm={4}>
          <Lottie animationData={security} />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;

