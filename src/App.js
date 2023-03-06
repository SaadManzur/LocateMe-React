import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MapComponent from './components/MapComponent';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col sm="0" md="2"></Col>
          <Col sm="12" md="8">
            <MapComponent/>
          </Col>
          <Col sm="0" md="2"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
