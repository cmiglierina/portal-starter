import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'
import { Outlet } from 'react-router';

function App() {


  return (
    <div className='page'>
      <Container className='pagebody'>
        <Row>
          <Col xs={1}>
            <Container>
              <Row>
                <Col>Menu 1</Col>
              </Row>
              <Row>
                <Col>Menu 2</Col>
              </Row>
            </Container>
          </Col>
          <Col xs={11}>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default App
