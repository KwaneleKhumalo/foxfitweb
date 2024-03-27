import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa"

const NotFound = ({ message }) => {
  return (
    <div className="not-found mb-0" >
      <Row >
        <Col md={12} className="text-center" style={{ marginTop: "50rem" }}>
          <h3>{message}</h3>
          <Link to={"/"} className="btn btn-outline-warning text-dark align-items-center justify-content-center text-center">
            <span>
              <FaArrowAltCircleLeft size={20}/>
            </span>
            &nbsp; BACK HOME
          </Link>
        </Col>
      </Row>
    </div>
  )
}

export default NotFound
