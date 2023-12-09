import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
import { appNavigationSettings, guestNavigationSettings, invisibleNavigationSettings } from "./Navigation";
import NavigationBar from "./components/software_app/navigation_bar/NavigationBar";
import GuestNavigationbar from "./components/guest_content/guest_navbar/GuestNavigationbar";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { UserProvider, useUser } from "./managers/User";

function App() {
  const createRouteElement = (navigationSetting) => {
    if (navigationSetting.allowedRoles.length === 0)
      return <navigationSetting.component />
    else
      return (
        <PrivateRoute
          allowedRoles={navigationSetting.allowedRoles}
          failurePath={navigationSetting.roleFailurePath}>
          <navigationSetting.component />
        </PrivateRoute>
      );
  }

  const invisibleRouters = () => {
    return (
      invisibleNavigationSettings.map((navigationSetting, index) => (
        <Route
          key={index}
          path={navigationSetting.path}
          element={<navigationSetting.component />}
        />
      ))
    );
  }

  const { isSignedIn } = useUser();
  console.log("is signed in", isSignedIn());
  if (!isSignedIn()) {
    return (
      <UserProvider>
        <GuestNavigationbar />
        <Routes>
          {invisibleRouters()}
          {
            guestNavigationSettings.map((navigationSetting, index) => (
              <Route
                key={index}
                path={navigationSetting.path}
                element={<navigationSetting.component />}
              />
            ))
          }
        </Routes>
      </UserProvider>
    );
  } else {
    return (
      <UserProvider>
        <Container id="app" fluid>
          <Row>
            <Col className="vh-100" lg={2} style={{ padding: "0px" }}>
              <NavigationBar />
            </Col>
            <Col className="vh-100" lg={10} style={{ padding: "5px" }}>
              <div id="app-content">
                <Routes>
                  {invisibleRouters()}
                  {
                    appNavigationSettings.map((navigationSetting, index) => (
                      <Route
                        key={index}
                        path={navigationSetting.path}
                        element={createRouteElement(navigationSetting)}
                      />
                    ))
                  }
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </UserProvider>
    );
  }
}

function PrivateRoute({ children, allowedRoles }) {
  const { userRole } = useUser();
  console.log(userRole + " is trying to access a page for", allowedRoles);
  if (userRole) {
    if (allowedRoles.includes(userRole)) {
      return <>{children}</>;
    } else {
      return <Navigate to="/access-denied" />;
    }
  }
  else {
    // No valid token or role, redirect to the login page
    return <Navigate to="/signin" />; // Adjust the redirect route as needed
  }
}

export default App;