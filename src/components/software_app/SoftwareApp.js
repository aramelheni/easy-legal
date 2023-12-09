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
            <div id="app">
                <div className="app-col" style={{ padding: "0px" }}>
                    <NavigationBar />
                </div>
                <div className="app-col app-content">
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
            </div>
        </UserProvider>
    );
}