import { Row, Button, Col } from "react-bootstrap"
import { FaCheckCircle } from "react-icons/fa"
import Header from "./Header"
import { Link } from "react-router-dom"
import WebFooter from "./WebFooter"
import HomeHeaderContent from "./HomeHeaderContent"
import { trainingGroups, trainers } from "../features/Home"
import { isEvenNum } from "../utils/helperFunctions"

const HomeComponent = () => {
  
  return (
    <div>
      <Header content={<HomeHeaderContent />} />
      <Row className="border py-5 bg-dark-subtle text-dark ">
        <Col md={6} className="mx-aut0 my-auto text-center ">
          <h5 style={styles.heading1} className="col-md-5 mx-auto ">
            Get Some Workout Benefit!
          </h5>
          <p style={styles.p} className="col-md-6 mx-auto mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta omnis eos illum earum, nesciunt minima nobis vero suscipit voluptas odit!
          </p>
        </Col>
        <Col md={6} className="text-center p-5">
          <Row>
            <Col md={6} className=" bg-danger shadow shadow-lg text-light rounded rounded-3 mb-3">
              <FaCheckCircle size={20} />

              <h4>Energetic Life</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aperiam a perspiciatis alias, vitae numquam adipisci hic corporis, reiciendis ad corrupti est, omnis dolor animi?</p>
            </Col>
            <Col md={6} className="rounded shadow rounded-3 p-2 mb-3">
              <FaCheckCircle size={20} />

              <h4>Healthy Body</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aperiam a perspiciatis alias, vitae numquam adipisci hic corporis, reiciendis ad corrupti est, omnis dolor animi?</p>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="rounded shadow rounded-3">
              <FaCheckCircle size={20} />
              <h4>More Confidence</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aperiam a perspiciatis alias, vitae numquam adipisci hic corporis, reiciendis ad corrupti est, omnis dolor animi?</p>
            </Col>
            <Col md={6} className="rounded shadow rounded-3">
              <FaCheckCircle size={20} />

              <h4>Self Empowerment</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aperiam a perspiciatis alias, vitae numquam adipisci hic corporis, reiciendis ad corrupti est, omnis dolor animi?</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="border py-5 bg-dark text-light ">
        <Col md={6} className="mx-aut0 my-auto text-center">
          <h2 style={styles.heading1} className="col-md-5 mx-auto ">
            Let's get you to your new Routine!
          </h2>
          <p style={styles.p} className="col-md-6 mx-auto mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odit pariatur deserunt repellat impedit reiciendis illo excepturi ad rerum, nesciunt non ipsam eum mollitia sint? Minus accusantium quam eligendi blanditiis!
          </p>
          <Link to="/" className="btn btn-danger">
            Learn More
          </Link>
        </Col>
        <Col md={6} className="text-center p-5">
          <img style={styles.image} className="shadow shadow-lg rounded rounded-5" src="https://thumbnails-photos.amazon.com/v1/thumbnail/7xVKM2CPQyGfzANXvmggdw?viewBox=1578%2C995&ownerId=A1YK1TL6G91V5W&groupShareToken=YPVeoTYSQheTmZeu0LLFXg.BVhgUwyb_OGZCc5J_YPURb" alt="2 people on stationery bikes in the gym" />
        </Col>
      </Row>

      <Row className="border py-5 bg-dark-subtle text-dark ">
        <Col md={12} className="mx-aut0 my-auto text-center">
          <h2 style={styles.heading1} className="col-md-5 mx-auto ">
            Select from Our Club Programs
          </h2>
          <p style={styles.p} className="col-md-6 mx-auto mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odit pariatur deserunt repellat impedit reiciendis illo excepturi ad rerum, nesciunt non ipsam eum mollitia sint? Minus accusantium quam eligendi blanditiis!
          </p>
        </Col>
        <Row className="p-5 text-center mx-auto">
          {trainingGroups.map(group => (
            <Col md={4} className={isEvenNum(group.groupId) ? "py-3 shadow shadow-lg px-3 rounded rounded-2  mx-auto bg-danger text-light" : "py-3 shadow shadow-lg px-3 rounded rounded-2  mx-auto"} key={group.groupId}>
              <FaCheckCircle size={25} className="mb-5" />
              <h4 className="mb-3">{group.groupName}</h4>
              <p className="mb-3">{group.description}</p>
              <Button variant={isEvenNum(group.groupId) ? "outline-light" : "outline-danger"}>Learn More</Button>
            </Col>
          ))}
        </Row>
      </Row>

      <Row className="border py-5 bg-dark text-light ">
        <Col md={12} className="mx-aut0 my-auto text-center">
          <h2 style={styles.heading2} className="col-12 mx-auto">
            Meet Our Dedicated Trainers!
          </h2>
        </Col>
        <Row className="p-5 text-center mx-auto">
          {trainers.map(trainer => (
            <Col md={3} className="mx-auto mt-5 mt-lg-0" key={trainer.trainerId}>
              <h4 className="mt-5 mb-3">{trainer.trainerName}</h4>
              <img className="rounded rounded-3" style={styles.image} src={trainer.trainerImg} alt={trainer.altText} />
              <Button variant="outline-danger" className="mt-3">
                Learn More
              </Button>
            </Col>
          ))}
        </Row>
      </Row>
      <Row className="border p-5 bg-dark-subtle text-dark ">
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
    </div>
  )
}

const styles = {
  heading1: {
    fontSize: "2em"
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

export default HomeComponent
