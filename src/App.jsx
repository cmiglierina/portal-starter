import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'
import { Outlet } from 'react-router';
import NavigationBar from './components/navbar/NavigationBar';
import TopBar from './components/navbar/TopBar';
import ErrorBoundary from './components/error/errorboundary';

function App() {


  return (
    <div className='page'>
      <ErrorBoundary>
        <Container className='div-wrapper'>

          <Row>
            <Col xs={2} className='menu-col'><NavigationBar></NavigationBar> </Col>
            <Col xs={10} >
              <div className="contenuto">
                <Container className='w-100'>
                  <Row><Col> <TopBar></TopBar> </Col></Row>
                  <Row className='contenuto-body'><Col><Outlet></Outlet></Col></Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </ErrorBoundary>
    </div>
  )
}

export default App
