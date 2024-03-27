import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { Row, Col, Form, Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import {  formCompleted } from "../utils/authValidation"
import { USER_SETTINGS, PROFILE } from "../utils/endpoints"



const UpdateForm = () => {
  const [userInfo, setUserInfo] = useState("")
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const navigate = useNavigate()

  const getUserInfo = async () => {
    const response = await axios.get(`${PROFILE}`, { withCredentials: true })
    const { data } = response
    setUserInfo(data.userData)
    setEmail(data.userData.email)
    setFirstName(data.userData.firstName)
    setLastName(data.userData.lastName)
  }


  useEffect(() => {
  getUserInfo()

  }, [])

  const handleForm = async e => {
    e.preventDefault()

    try {
      const response = await axios.put(USER_SETTINGS, { email, firstName, lastName }, { withCredentials: true })

      const { data } = response.data
      sessionStorage.setItem("userInfo", JSON.stringify(data))
      navigate("/profile")
      toast.success("Account Updated Successfully!")
    } catch (error) {
      toast.error(error.response.data)
    }
  }

  return (
    <>
      <Row className="px-5">
        <Col className="border-0 mx-auto p-4 mt-5 rounded rounded-lg shadow shadow-lg">
          <h3 className="mb-5 border-bottom p-3">Personal Information</h3>
          <Form onSubmit={handleForm} autoComplete="off" noValidate>
            <Form.Group className="mb-3 d-flex" controlId="email">
              <Form.Label className="w-50">Email: </Form.Label>
              <Form.Control className="w-50" type="email" placeholder="i.e. jdoe@email.com" value={email} onChange={e => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3 d-flex" controlId="firstname">
              <Form.Label className="w-50">First Name: </Form.Label>
              <Form.Control className="w-50" type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3 d-flex" controlId="lastname">
              <Form.Label className="w-50">Last Name:</Form.Label>
              <Form.Control className="w-50" type="text" placeholder="LastName" value={lastName} onChange={e => setLastName(e.target.value)} />
            </Form.Group>

            <Button type="submit" variant="success" disabled={!formCompleted(email, firstName, lastName)}>
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default UpdateForm
