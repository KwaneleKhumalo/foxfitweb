import axios from "axios"
import { PROFILE } from "../utils/endpoints"
import { useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"
import AuthNav from "./AuthNav"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Footer from "./Footer"

const ProfileComponent = () => {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [createdAt, setCreatedAt] = useState("")
  const [memberType, setMemberType] = useState("")
  const [accountStatus, setAccountStatus] = useState("")
  const [subscriptionStart, setSubscriptionStart] = useState("")
  const [renewal, setRenewal] = useState("");
  const [cost, setCost] = useState("")
  const navigate = useNavigate("")
  const user = JSON.parse(sessionStorage.getItem("userInfo"))
  
  const getUserProfile = async () => {
  const response = await axios.get(`${PROFILE}`, { withCredentials: true })

    if (user && response) {
      setEmail(response.data.userData.email)
      setFirstName(response.data.userData.firstName)
      setLastName(response.data.userData.lastName)
      setCreatedAt(response.data.userData.createdAt)
      setAccountStatus(response.data.userData.isPaid)
      setMemberType(response.data.userData.membershipType)
      setSubscriptionStart(response.data.userData.subscriptionStart)
      setRenewal(response.data.userData.renewalDate)
      setCost(response.data.userData.membershipCost)

      response.data.userData.isPaid === false ? setAccountStatus("Inactive") : setAccountStatus("Active")

    }
  }

  useEffect(() => {
    if (!user) {
      navigate("/login")
      toast.warning("Please Login!")
    }
    getUserProfile()
  }, [user])


  return (
    <>
      <AuthNav />
      <Row>
        <Col lg={11} className="bg-light border p-5 text-dark border-0 shadow mb-5 mt-4 mx-auto">
          <h2 className="text-center" style={styles}>
            Personal Details
          </h2>
          <h6 className="text-muted text-center p-2">{email}</h6>

          <h3 className="text-center text-lg-start border-bottom p-2">{`${firstName} ${lastName}`}</h3>

          <Row className="mt-5 mx-md-auto text-center text-lg-end">
            <Col lg={3}>
              <h6>Email</h6>
              <p className="text-secondary">{email}</p>
            </Col>
            <Col lg={3}>
              <h6>First Name</h6>
              <p className="text-secondary">{firstName}</p>
            </Col>
            <Col lg={3}>
              <h6>First Name</h6>
              <p className="text-secondary">{lastName}</p>
            </Col>
          </Row>
        </Col>

        <Col lg={11} className="bg-light border p-5 text-dark border-0 shadow mb-5 mt-4 mx-auto">
          <h2 className="text-center mb-5" style={styles}>
            Account Details
          </h2>
          <h6 className="text-muted border-bottom text-center text-lg-start"></h6>
          <Row className="mt-5 mx-md-auto text-center text-lg-start">
            <Col lg={2}>
              <h6>Member Since</h6>
              <p className="text-secondary">{new Date(createdAt).toLocaleDateString("en-US")}</p>
            </Col>
            <Col lg={2}>
              <h6>Account Status</h6>
              {accountStatus === "Inactive" ? <p className="text-danger">{accountStatus}</p> : <p className="text-success">{accountStatus}</p>}
            </Col>
            <Col lg={2}>
              <h6>Membership Type</h6>
              {memberType === "Bronze" ? <p className="text-warning">{memberType}</p> : memberType === "Silver" ? <p className="text-primary">{memberType}</p> : <p className="text-success">{memberType}</p>}
            </Col>

            <Col lg={2}>
              <h6>Next Payment</h6>
              <p className="text-warning">{new Date(renewal).toLocaleDateString("en-US")}</p>
            </Col>
            <Col lg={2}>
              <h6>Subscription Start Date</h6>
              <p className="text-secondary">{new Date(subscriptionStart).toLocaleDateString("en-US")}</p>
            </Col>
            <Col lg={2}>
              <h6>Subscription Cost</h6>
              <p className="text-success">${cost}.00</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer />
    </>
  );
}

const styles = {
  textDecoration: "underline",
  textUnderlineOffset: "8px",
  textDecorationColor: "grey"
}

export default ProfileComponent
