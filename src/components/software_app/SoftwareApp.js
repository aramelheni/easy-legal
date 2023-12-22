import NavigationBar from "./navigation_bar/NavigationBar.js";
import { appNavigationSettings } from "../../Navigation.js"
import PrivateRoute from "../../PrivateRoute.js";
import { UserProvider } from "../../managers/User.js";
import { Navigate, Route, Routes } from "react-router-dom";
import "./SoftwareApp.css";
import { createContext, useState } from "react";

export const AppContext = createContext();

export default function SoftwareApp() {
    const [selectedCase, setSelectedCase] = useState(null);
    const appContextValue = {
        selectedCase,
        setSelectedCase
    }

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
        <AppContext.Provider value={appContextValue}>
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
        </AppContext.Provider>
    );
}