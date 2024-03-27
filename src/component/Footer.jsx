import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <Row className="border p-4 bg-dark mb-0" style={{ marginTop: "19.6rem" }}>
      <Col sm={12} className="text-center text-secondary">
        <img className="mb-2" style={{ width: "20px" }} src="https://thumbnails-photos.amazon.com/v1/thumbnail/pbkD9hbSS1qwcLMsiRihkQ?ownerId=A1YK1TL6G91V5W&viewBox=654%2C700&groupShareToken=aqnuI1FhRcCGvnCKl8yytw.0Vlhzte8dtHMfwxWn9UNbk" alt="DigitalCircle Logo" />

        <p>
          &copy; {`${date}`} Powered by:
          <span>
            <Link className="nav-link text-primary" to={"https://www.digitalcircle.biz/"}>
              Digital Circle
            </Link>
          </span>
        </p>
      </Col>
    </Row>
  )
}

export default Footer
