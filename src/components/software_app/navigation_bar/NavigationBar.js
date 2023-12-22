import "./NavigationBar.css"
import NavigationButton from "./button/NavigationButton";
import { appNavigationSettings } from "../../../Navigation";
import AccountPanel from "./account_panel/AccountPanel";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../SoftwareApp";

export default function NavigationBar() {
    const { selectedCase } = useContext(AppContext);
    console.log(selectedCase);
    const path = useLocation().pathname;

    return (
        <div id="navigation-bar">
            <h1 id="navbar-logo-text">Easy Legal</h1>
            <hr className="horizontal-line-secondary" />
            <div id="navbar-content">
                <div className="navbar-buttons">
                    {
                        appNavigationSettings.map((setting, index) => (
                            <NavigationButton key={index} navigationSetting={setting} isSelected={path == setting.path} isCaseSelected={selectedCase != null}/>
                        ))
                    }
                </div>
                {
                    selectedCase != null &&
                    <div className="navbar-case-panel">
                        <p><b>Selected Case</b></p>
                        <p className="navbar-case-title">{selectedCase.title}</p>
                    </div>
                }
                <AccountPanel />
            </div>
        </div >
    );
}