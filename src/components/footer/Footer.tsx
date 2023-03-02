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
  const currentYear = new Date().getFullYear();
  return (
    <MDBFooter className="text-center text-white bg-dark">
      <MDBContainer className="p-0 p-md-4">
        <section>
          <MDBRow>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <img
                src={windows}
                className="img-fluid mobileMode"
                alt="windows"
              />
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <img src={workspace} className="img-fluid" alt="workspace" />
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <img src={tools} className="img-fluid mobileMode" alt="tools" />
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <img src={lawn} className="img-fluid mobileMode" alt="lawn" />
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <img src={house} className="img-fluid mobileMode" alt="house" />
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <img src={blinds} className="img-fluid mobileMode" alt="blinds" />
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className="text-center p-3 footerText">
        © {currentYear} Copyright: Lea Ohayon
        <a
          href="https://www.linkedin.com/in/lea-ohayon-0938ab265"
          className="p-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="mb-1" style={{ fontSize: "20px" }} />
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
