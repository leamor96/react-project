import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import windows from "../../images/windows.jpg";
import blinds from "../../images/blinds.jpg";
import lawn from "../../images/lawn.jpg";
import tools from "../../images/tools.jpg";
import workspace from "../../images/workspace.jpg";
import house from "../../images/house.jpg";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <MDBFooter className="text-center text-white bg-dark">
      <MDBContainer className="p-4">
        <section>
          <MDBRow>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <img src={windows} className="img-fluid" alt="windows" />
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <img src={workspace} className="img-fluid" alt="workspace" />
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <img src={tools} className="img-fluid" alt="tools" />
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <img src={lawn} className="img-fluid" alt="lawn" />
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <img src={house} className="img-fluid" alt="house" />
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <img src={blinds} className="img-fluid" alt="blinds" />
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className="text-center p-3 footerText">
        © 2023 Copyright: Lea Ohayon
        <a
          href="https://www.linkedin.com/in/lea-ohayon-0938ab265"
          className="p-2"
        >
          <BsLinkedin className="mb-1" style={{ fontSize: "20px" }} />
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
