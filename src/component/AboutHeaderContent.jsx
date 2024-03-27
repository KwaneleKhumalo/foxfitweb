import { Row, Col } from "react-bootstrap"

const AboutHeaderContent = () => {
  return (
    <div>
      <Row className="bg-dark header-background" style={styles.background}>
        <Col md={5} className="my-auto text-center mx-auto p-5">
          <h1 style={styles.heading1} className="text-light ">
            We Help You Start Their Routine Workout
          </h1>
          <p style={styles.p} className="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus obcaecati illo illum enim nam omnis, dolorem velit sit architecto accusantium?
          </p>
        </Col>
      </Row>
      
    </div>
  )
}

const styles = {
  heading1: {
    fontSize: "3em"
  },
  heading2: {
    fontSize: "2em"
  },
  p: {
    fontSize: "20px"
  },
  image: {
    width: "100%"
  }
}

export default AboutHeaderContent
