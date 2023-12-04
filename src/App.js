import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
import { appNavigationSettings, guestNavigationSettings } from "./Navigation";
import NavigationBar from "./components/user_content/navigation_bar/NavigationBar";
import GuestNavigationbar from "./components/guest_content/guest_navbar/GuestNavigationbar";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const isGuest = true;

  if (isGuest) {
    return (
      <div>
        <GuestNavigationbar />
        <Routes>
          {
            guestNavigationSettings.map((navigationSetting, index) => (
              <Route key={index} path={navigationSetting.path} element={navigationSetting.element} />
            ))
          }
        </Routes>
      </div>
    );
  } else {
    return (
      <Container id="app" fluid>
        <Row>
          <Col className="vh-100" lg={2} style={{ padding: "0px" }}>
            <NavigationBar />
          </Col>
          <Col className="vh-100" lg={10} style={{ padding: "5px" }}>
            <div id="app-content">
              <Routes>
                {
                  appNavigationSettings.map((navigationSetting, index) => (
                    <Route key={index} path={navigationSetting.path} element={navigationSetting.element} />
                  ))
                }
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
