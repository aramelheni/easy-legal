import "./NavigationBar.css"
import NavigationButton from "./button/NavigationButton";
import { navigationSettings } from "../../Navigation";

export default function NavigationBar() {
    return (
        <div id="navigation-bar">
            <h1 id="navbar-logo-text">Easy Legal</h1>
            <hr className="horizontal-line-secondary" />
            <div id="navbar-content">
                <div id="buttons">
                    {
                        navigationSettings.map((setting, index) => (
                            <NavigationButton key={index} navigationSetting={setting} />
                        ))
                    }
                </div>
                <div id="account-panel">
                    
                </div>
            </div>
        </div >
    );
}