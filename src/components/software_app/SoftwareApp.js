import NavigationBar from "./navigation_bar/NavigationBar.js";
import { appNavigationSettings } from "../../Navigation.js"
import PrivateRoute from "../../PrivateRoute.js";
import { UserProvider } from "../../managers/User.js";
import { Col, Container, Row } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import "./SoftwareApp.css";

export default function SoftwareApp() {
    const createRouteElement = (navigationSetting) => {
        const component = (
            <div className={navigationSetting.customPaper ? "" : "app-paper"}>
                <navigationSetting.component />
            </div>
        );

        if (navigationSetting.allowedRoles.length === 0)
            return component;
        else
            return (
                <PrivateRoute
                    allowedRoles={navigationSetting.allowedRoles}
                    failurePath={navigationSetting.roleFailurePath}
                >
                    {component}
                </PrivateRoute>
            );
    }

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
                                {
                                    appNavigationSettings.map((navigationSetting, index) => (
                                        <Route
                                            key={index}
                                            path={navigationSetting.path}
                                            element={createRouteElement(navigationSetting)}
                                        />
                                    ))
                                }
                                <Route path="*" element={<Navigate to="/" />} />
                                <Route path="/" element={<Navigate to={appNavigationSettings[0].path} />} />
                            </Routes>
                        </div>
                    </Col>
                </Row>
            </Container>
        </UserProvider>
    );
}