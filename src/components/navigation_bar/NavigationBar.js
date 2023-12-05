import "./NavigationBar.css"
import NavigationButton from "./button/NavigationButton";
import { navigationSettings } from "../../Navigation";
import AccountPanel from "./account_panel/AccountPanel";

export default function NavigationBar() {
    return (
        <div id="navigation-bar">
            <h1 id="navbar-logo-text">Easy Legal</h1>
            <hr className="horizontal-line" />
            <div id="navbar-content">
                <div id="buttons">
                    {
                        navigationSettings.map((setting) => (
                            <NavigationButton navigationSetting={setting} />
                        ))
                    }
                </div>
                <AccountPanel />
            </div>
        </div >
    );
}