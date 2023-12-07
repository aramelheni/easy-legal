import NavigationBar from "../navigation_bar/NavigationBar";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { navigationSettings } from "../../Navigation";
import { useState } from "react";

export default function SoftwareApp() {
    const [selectedCase, setSelectedCase] = useState(null);

    const routerArguments = {
        selectedCase,
        setSelectedCase
    }
    return (
        <Container id="app" fluid>
            <Row>
                <Col className="vh-100" lg={2} style={{ padding: "0px" }}>
                    <NavigationBar selectedCase={selectedCase}/>
                </Col>
                <Col className="vh-100" lg={10} style={{ padding: "5px" }}>
                    <div id="app-content">
                        <Routes>
                            {
                                navigationSettings.map(navigationSetting => {
                                    return <Route path={navigationSetting.path} element={<navigationSetting.component {...routerArguments}/>} />
                                })
                            }
                        </Routes>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}