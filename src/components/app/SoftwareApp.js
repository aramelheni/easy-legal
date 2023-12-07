import NavigationBar from "../navigation_bar/NavigationBar";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { navigationSettings } from "../../Navigation";
import { React, createContext, useState } from "react";

export const AppContext = createContext();

export default function SoftwareApp() {
    const [selectedCase, setSelectedCase] = useState(null);

    const app = {
        selectedCase,
        setSelectedCase
    }

    return (
        <AppContext.Provider value={app}>
            <Container id="app" fluid>
                <Row>
                    <Col className="vh-100" lg={2} style={{ padding: "0px" }}>
                        <NavigationBar selectedCase={selectedCase} />
                    </Col>
                    <Col className="vh-100" lg={10} style={{ padding: "5px" }}>
                        <div id="app-content">
                            <Routes>
                                {
                                    navigationSettings.map(navigationSetting => {
                                        return <Route path={navigationSetting.path} element={<navigationSetting.component/>} />
                                    })
                                }
                            </Routes>
                        </div>
                    </Col>
                </Row>
            </Container>
        </AppContext.Provider>
    );
}