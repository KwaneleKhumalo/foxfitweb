import AboutHeaderContent from "./AboutHeaderContent"
import Header from "./Header"
import { Row, Col } from "react-bootstrap"
import WebFooter from "./WebFooter"
import { Link } from "react-router-dom"
import { awards, experience } from "../features/about"


const AboutUsComponent = () => {
  return (
    <>
      <Header content={<AboutHeaderContent />} />
      <Row className="py-5 bg-dark-subtle text-dark ">
        <Col md={6} className="mx-auto my-auto text-center">
          <h2 style={styles.heading1} className="col-md-6 mx-auto ">
            About Us
          </h2>
          <p style={styles.p} className="col-md-8 mx-auto text-start mb-5 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odit pariatur deserunt repellat impedit reiciendis illo excepturi ad rerum, nesciunt non ipsam eum mollitia sint? Minus accusantium quam eligendi blanditiis!
          </p>
          <p style={styles.p} className="col-md-8 mx-auto text-start mb-5 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odit pariatur deserunt repellat impedit reiciendis illo excepturi ad rerum, nesciunt non ipsam eum mollitia sint? Minus accusantium quam eligendi blanditiis!
          </p>
        </Col>
        <Col md={6} className="text-center p-5">
          <img style={styles.image} className="shadow shadow-lg rounded rounded-5" src="https://thumbnails-photos.amazon.com/v1/thumbnail/7xVKM2CPQyGfzANXvmggdw?viewBox=1578%2C995&ownerId=A1YK1TL6G91V5W&groupShareToken=YPVeoTYSQheTmZeu0LLFXg.BVhgUwyb_OGZCc5J_YPURb" alt="2 people on stationery bikes in the gym" />
        </Col>
      </Row>
      <Row className="py-5 bg-dark text-light ">
        {experience.map(skills => (
          <Col md={3} className="mx-auto my-auto text-center" key={skills.id}>
            <h2>{skills.experience}</h2>
            <p>{skills.description}</p>
          </Col>
        ))}
      </Row>

      <Row className="py-5 bg-dark-subtle text-dark ">
        <Col md={12} className="mx-auto mb-5 my-auto text-center">
          <h2 style={styles.heading1} className="col-md-2 mx-auto text-center">
            Our Accomplishments!
          </h2>
          <p style={styles.p} className="col-md-6 mx-auto text-secondary-emphasis">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi impedit rerum, mollitia tempora enim exercitationem vitae nam quis repellat laborum!
          </p>
        </Col>
        <Row className="p-5 text-center mx-auto">
          {awards.map(award => (
            <Col md={3} className="shadow mb-2 shadow-lg p-0 rounded rounded-2  mx-auto text-light bg-dark" key={award.awardId}>
              <h4 className="mb-3 text-center bg-danger w-25 ms-auto text-light">{award.awardYear}</h4>
              <h3>{award.awardName}</h3>
              <p className="mb-3 p-3">{award.description}</p>
            </Col>
          ))}
        </Row>
      </Row>
      <Row className="p-5 bg-dark">
        <Col md={9} className=" p-5 mx-auto rounded rounded-3 my-auto text-center bg-secondary text-light">
          <h2 style={styles.heading2} className="col-md-5 mx-auto ">
            Join Our Membership And Start Your Workout
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, hic?</p>
          <Link to={"/register"} className="btn btn-danger">
            Join Now
          </Link>
        </Col>
      </Row>
      <WebFooter />
    </>
  )
}

const styles = {
  heading1: {
    fontSize: "2.5em"
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



export default AboutUsComponent
