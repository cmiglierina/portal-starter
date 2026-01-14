import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'
import { Outlet } from 'react-router';
import NavigationBar from './components/navbar/NavigationBar';

function App() {


  return (
    <div className='page'>
      <Container>
        <Row>
          <Col xs={1} ><NavigationBar></NavigationBar> </Col>
          <Col xs={11} >
            <div className="contenuto">
              <Container>
                <Row><Col></Col></Row>
                <Row><Col><Outlet></Outlet></Col></Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
