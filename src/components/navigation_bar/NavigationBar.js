import { Container, Row, Col } from "react-bootstrap";
import "./NavigationBar.css"
import NavigationButton from "./button/NavigationButton";
import { navigationSettings } from "../../Navigation";

export default function NavigationBar() {
    return (<div id="navigation-bar">
        <h1 id="logo-text">Easy Legal</h1>
        <hr className="horizontal-line" />
        <div id="buttons">
            {
                navigationSettings.map((setting) => (
                    <NavigationButton navigationSetting={setting} />
                ))
            }
        </div>
    </div >);
}