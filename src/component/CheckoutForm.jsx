import { PayPalButtons } from "@paypal/react-paypal-js"
import { SUBSCRIPTION_PAYMENT, PROFILE } from "../utils/endpoints"
import { useEffect, useState } from "react"
import axios from "axios"
import { Col, Row } from "react-bootstrap"

const CheckoutForm = () => {
  const [userInfo, setUserInfo] = useState("")

  const getData = async () => {
    const response = await axios.get(`${PROFILE}`, { withCredentials: true })
    setUserInfo(response.data.userData)
  }

  useEffect(() => {
    getData()
  }, [])

  const createOrder = data => {
    // Order is created on the server and the order id is returned
    return fetch(`${SUBSCRIPTION_PAYMENT}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        subscription: {
          membershipType: userInfo.membershipType,
          cost: userInfo.membershipCost
        }
      })
    })
      .then(response => response.json())
      .then(order => order.id)
  }

  const onApprove = data => {
    // Order is captured on the server and the response is returned to the browser
    return fetch(`${SUBSCRIPTION_PAYMENT}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        orderID: data.orderID
      })
    }).then(response => response.json())
  }


  return (
    <Row className="text-center border">
      <Col className="mx-auto">
        <PayPalButtons createOrder={(data, actions) => createOrder(data, actions)} onApprove={(data, actions) => onApprove(data, actions)} />
      </Col>
    </Row>
  )
}

export default CheckoutForm
