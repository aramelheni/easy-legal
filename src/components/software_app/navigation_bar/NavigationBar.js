import "./NavigationBar.css"
import NavigationButton from "./button/NavigationButton";
import { appNavigationSettings } from "../../../Navigation";
import AccountPanel from "./account_panel/AccountPanel";
import { useLocation } from "react-router-dom";

export default function NavigationBar() {
    const path = useLocation().pathname;

    return (
        <div id="navigation-bar">
            <h1 id="navbar-logo-text">Easy Legal</h1>
            <hr className="horizontal-line" />
            <div id="navbar-content">
                <div id="buttons">
                    {
<<<<<<< HEAD:src/components/navigation_bar/NavigationBar.js
                        navigationSettings.map((setting, index) => (
                            <NavigationButton key={index} navigationSetting={setting} />
=======
                        appNavigationSettings.map((setting, index) => (
                            <NavigationButton key={index} navigationSetting={setting} isSelected={path == setting.path} />
>>>>>>> 6fda0d85264c3675aee8fe7caad88efd7aeaeb7b:src/components/software_app/navigation_bar/NavigationBar.js
                        ))
                    }
                </div>
                <AccountPanel />
            </div>
        </div >
    );
}