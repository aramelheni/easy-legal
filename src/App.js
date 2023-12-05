import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
import NavigationBar from "./components/navigation_bar/NavigationBar";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { navigationSettings } from "./Navigation";
import "./styles/Buttons.css"

function App() {
  return (
    <Container id="app" fluid>
      <Row>
        <Col className="vh-100" lg={2} style={{ padding: "0px" }}>
          <NavigationBar />
        </Col>
        <Col className="vh-100" lg={10} style={{ padding: "5px" }}>
          <div id="app-content">
            <button className="success-button">Hello</button>
            <Routes>
              {
                navigationSettings.map(navigationSetting=>(
                  <Route path={navigationSetting.path} element={navigationSetting.element} />
                ))
              }
            </Routes>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
