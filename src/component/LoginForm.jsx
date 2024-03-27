import AuthNav from "./AuthNav"
import { Link, useNavigate } from "react-router-dom"
import { Row, Form, Button, Col } from "react-bootstrap"
import { useEffect, useState } from "react"
import axios from "axios"
import { USER_LOGIN } from "../utils/endpoints"
import { toast } from "react-toastify"
import { formCompleted } from "../utils/authValidation"
import Footer from "./Footer"
import NotFound from "./NotFound"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isNetworkError, setIsNetworkError] = useState(false)

  const navigate = useNavigate()

  const handleLogin = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(USER_LOGIN, { email, password }, { withCredentials: true })
      const { data } = response.data
      sessionStorage.setItem("userInfo", JSON.stringify(data))
      toast.success(response.data.msg)
      navigate("/profile")
      setEmail("")
      setPassword("")
    } catch (err) {
      if (err) {
        handleNotFound(err);
        if(err.response) toast.error(err.response.data);
      }
    }
  }

  const handleNotFound = err => {
    if (err.message === "Network Error") {
      setIsNetworkError(true)
    } else {
      setIsNetworkError(false)
    }
  }

  return (
    <div>
      <AuthNav />
      {isNetworkError ? (
        <NotFound message={"Resource Not found!"} />
      ) : (
        <>
          <Row className="px-5">
            <Col lg={5} xl={3} sm={8} className="border-0 mx-auto p-5 mt-5 rounded rounded-lg shadow shadow-lg">
              <h1 className="text-center">Login</h1>

              <Form autoComplete="off" onSubmit={handleLogin} noValidate>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email: </Form.Label>
                  <Form.Control type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>

                <Button type="submit" variant="success" disabled={!formCompleted(email, password)}>
                  Login
                </Button>
                <Row>
                  <Col className="mt-3">
                    Need an Account?{" "}
                    <Link to="/register" style={{ textDecoration: "none" }}>
                      Register
                    </Link>
                  </Col>
                  <Col sm={12} className="text-center text-secondary mt-5">
                    <img className="mb-2" style={{ width: "30px" }} src="https://thumbnails-photos.amazon.com/v1/thumbnail/pbkD9hbSS1qwcLMsiRihkQ?ownerId=A1YK1TL6G91V5W&viewBox=654%2C700&groupShareToken=aqnuI1FhRcCGvnCKl8yytw.0Vlhzte8dtHMfwxWn9UNbk" alt="DigitalCircle Logo" />
                    <p>
                      Powered by:&nbsp;
                      <span>
                        <Link className="text-primary" to={"https://www.digitalcircle.biz/"} style={{ textDecoration: "none" }}>
                          Digital Circle
                        </Link>
                      </span>
                    </p>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
          <Footer />
        </>
      )}
    </div>
  );
}

export default LoginForm
