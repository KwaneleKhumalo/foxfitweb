import { Link } from "react-router-dom"
import { Row, Col } from "react-bootstrap"
const HomeHeaderContent = () => {
  return (
    <div>
      <Row className="bg-dark header-background animate__animated animate__zoomIn animate_slower" style={styles.background}>
        <Col md={12} lg={6} className="mx-auto my-lg-auto text-center p-5">
          <h1 style={styles.heading1} className="text-light ms-auto animate__animated animate__zoomIn animate_slower">
            Start Workout And Make Your Body Change Healthier
          </h1>
          <p style={styles.p} className="text-light col-md-8 mx-md-auto animate__animated animate__zoomIn animate__delay-.9s">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus obcaecati illo illum enim nam omnis, dolorem velit sit architecto accusantium?
          </p>
          <Link className="text-light btn btn-danger text-center animate__animated animate__zoomIn animate__delay-.9s" to="/register">
            Get Started Today
          </Link>
        </Col>
        <Col md={12} lg={6} className="my-auto text-center mt-4 p-5 d-lg-block d-none">
          <img className="shadow shadow-lg rounded rounded-3 w-50 animate__animated animate__slideInLeft animate__delay-.9s" src="https://thumbnails-photos.amazon.com/v1/thumbnail/Qid5rPlvTFWS5N2i_dxQbw?viewBox=663%2C995&ownerId=A1YK1TL6G91V5W&groupShareToken=WuOuCz2MSjGN8ggcYFtVww.zPLD0XitMKecajAFjs5OS8" alt="Man Standing in the gym." />
        </Col>
      </Row>
    </div>
  )
}

const styles = {
  background: {
    zIndex: 1
  },
  heading1: {
    fontSize: "3em"
  },
  p: {
    fontSize: "25px"
  }
}

export default HomeHeaderContent
