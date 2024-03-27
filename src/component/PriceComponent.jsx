import Header from "./Header"
import PriceHeaderContent from "./PriceHeaderContent"
import { Link } from "react-router-dom"
import { Row, Col } from "react-bootstrap"
import {FaCheckCircle} from "react-icons/fa"
import WebFooter from "./WebFooter"
import { monthlyPricing, annualPricing } from "../features/pricing"



const PriceComponent = () => {
  return (
    <>
      <Header content={<PriceHeaderContent />} />

      <Row className="py-5 bg-dark-subtle text-dark">
        <Col md={12} className="mx-aut0 my-auto text-center mb-5">
          <h2 style={styles.heading1} className="col-md-5 mx-auto ">
            Monthly Pricing
          </h2>
        </Col>
        {monthlyPricing.map(price => (
          <Col md={3} className="shadow shadow-lg p-0 rounded rounded-3 mx-auto text-light bg-dark mb-5" key={price.subscriptionID}>
            <h4 className="mb-3 text-center bg-danger ms-auto text-light ">{price.subscriptionType}</h4>
            <h3 className="text-center">{price.subscriptionDescription}</h3>
            <h4 className="text-start mt-3 p-3 border-bottom border-danger col-md-11 text-info mx-auto">
              ${price.subscriptionPrice}
              <span className="text-secondary" style={styles.month}>
                {" "}
                / Month{" "}
              </span>
            </h4>
            {price.subscriptionFeatures.map(feature => (
              <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex" key={feature.featureID}>
                <span className="text-danger">
                  <FaCheckCircle />
                </span>
                {feature.feature}
              </p>
            ))}
          </Col>
        ))}
      </Row>

      <Row className="py-5 py-5 bg-dark text-light">
        <Col md={12} className="mx-aut0 my-auto text-center mb-5">
          <h2 style={styles.heading1} className="col-md-5 mx-auto ">
            Annual Pricing
          </h2>
        </Col>
        {annualPricing.map(price => (
          <Col md={3} className="shadow shadow-lg p-0 rounded rounded-3 mx-auto text-dark bg-dark-subtle mb-5" key={price.subscriptionID}>
            <h4 className="mb-3 text-center bg-danger ms-auto text-light p-2">{price.subscriptionType}</h4>
            <h3 className="text-center">{price.subscriptionDescription}</h3>
            <h4 className="text-start mt-3 p-3 border-bottom border-danger col-md-11 text-danger mx-auto">
              ${price.subscriptionPrice}
              <span className="text-secondary" style={styles.month}>
                / Month
              </span>
            </h4>
            {price.subscriptionFeatures.map(feature => (
              <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex" key={feature.featureID}>
                <span className="text-danger">
                  <FaCheckCircle />
                </span>
                {feature.feature}
              </p>
            ))}
          </Col>
        ))}
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
    </>
  )
}

const styles = {
  heading1: {
    fontSize: "3em"
  },
  heading2: {
    fontSize: "2em"
  },
  month: {
    fontSize: "16px"
  },
  image: {
    width: "100%"
  }
}


export default PriceComponent
