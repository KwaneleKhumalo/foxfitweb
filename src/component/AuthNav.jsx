import { useEffect, useState } from "react"
import { Navbar, Nav, Row, Col } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { USER_LOGOUT } from "../utils/endpoints"
import { toast } from "react-toastify"
import axios from "axios"

const AuthNav = () => {
  const logo = "https://thumbnails-photos.amazon.com/v1/thumbnail/DjSENbKnT2qXgFdhJG7wyg?viewBox=880%2C871&ownerId=A1YK1TL6G91V5W&groupShareToken=coYQZg2ZQHy51qRwasQ2Pw.4xkhZlqZV9XomGQ0TZr0M9"
  const [userInfo, setUserInfo] = useState(null)

  const navigate = useNavigate()

  const getUserInfo = () => {
    const userData = JSON.parse(sessionStorage.getItem("userInfo"))
    setUserInfo(userData)
  }

  const handleLogout = () => {
    axios.post(USER_LOGOUT, null, { withCredentials: true })
    sessionStorage.clear()
    toast.info("Logged Out Successfully!")
    navigate("/login")
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <div style={{ zIndex: 100 }}>
      <Navbar expand="md" className="bg-dark px-3 shadow shadow-lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-light border ms-auto" />
        <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
          {userInfo ? (
            <>
              <p className="navbar-brand my-auto text-light px-5">{`Hello, ${userInfo.firstName}`}</p>
              <Nav className="align-items-center">
                <Link to="/dashboard" className="nav-link text-secondary">
                  Dashboard
                </Link>
                <Link to="/workouts" className="nav-link text-secondary">
                  Workouts
                </Link>
              </Nav>
            </>
          ) : (
            <Nav className="align-items-center">
              <Link className="navbar-brand px-5 text-light mx-auto" to="/">
                <img src={logo} alt="Fox Fit White Logo" style={{ width: "60px" }} />
              </Link>
              <Link to="/" className="nav-link text-light">
                Home
              </Link>
              <Link to="/about" className="nav-link text-light">
                About
              </Link>
              <Link to="/programs" className="nav-link text-light">
                Programs
              </Link>
              <Link to="/pricing" className="nav-link text-light">
                Pricing
              </Link>
            </Nav>
          )}

          <Nav className="ms-auto px-5 ">
            {userInfo ? (
              <>
                <Link to="/profile" className="nav-link text-secondary">
                  Profile
                </Link>
                <Link to="/settings" className="nav-link text-secondary">
                  Settings
                </Link>
                <Nav.Link className="nav-link text-secondary" onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link text-secondary">
                  Login
                </Link>
                <Link to="/register" className="nav-link text-secondary">
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default AuthNav
