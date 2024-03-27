import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const WebFooter = () => {
  const date = new Date().getFullYear()

  return (
    <Row className="border p-4 bg-dark mb-0 text-center">
      <Col md={4} className="mx-auto d-sm-block d-md-flex justify-content-around p-2">
        <Link to={"/"} className="nav-link text-light">
          HOME
        </Link>
        <Link to={"/about"} className="nav-link text-light">
          ABOUT
        </Link>
        <Link to={"/programs"} className="nav-link text-light">
          PROGRAMS
        </Link>
        <Link to={"/register"} className="nav-link text-light">
          REGISTER
        </Link>
        <Link to={"/login"} className="nav-link text-light">
          LOGIN
        </Link>
      </Col>
      <Col md={11} className="mb-3 border-top border-2 border-secondary">
        <Row className="text-secondary">
          <Col className="mt-3">
            <p>Privacy Policy</p>
          </Col>
          <Col className="mt-3">
            <p>&copy;{date} FoxFit Club. All rights reserved.</p>
          </Col>
          <Col className="mt-3">
            <p>Terms & Conditions</p>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default WebFooter
