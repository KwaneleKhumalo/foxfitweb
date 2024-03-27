import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthNav from './AuthNav'

const Header = ({content}) => {
  return (
    <Row className="bg-dark">
      <AuthNav />
      {content}
    </Row>
  )
}



export default Header
