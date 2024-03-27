import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CustomAlert = ({ message, heading, variant }) => {
  const [show, setShow] = useState(true)
  return (
    <Alert variant={variant} className="text-center " onClose={() => setShow(false)} dismissible>
      <Alert.Heading>{heading}</Alert.Heading>
      <p className="fw-bold">{message}</p>
      <p>
        Click{" "}
        <span>
          <Link to="/payment">Here</Link>
        </span>{" "}
        to make a payment.
      </p>
    </Alert>
  )
}

export default CustomAlert
