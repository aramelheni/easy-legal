import "./NavigationBar.css"
import NavigationButton from "./button/NavigationButton";
import { appNavigationSettings } from "../../../Navigation";
import AccountPanel from "./account_panel/AccountPanel";
<<<<<<< HEAD:src/components/navigation_bar/NavigationBar.js
import React, { useContext } from 'react';
import { AppContext } from "../app/SoftwareApp";

export default function NavigationBar() {
    const { selectedCase } = useContext(AppContext);
=======
import { useLocation } from "react-router-dom";

export default function NavigationBar() {
    const path = useLocation().pathname;
>>>>>>> 606e256786c2b972322a2e5162f407cb8b3c6e58:src/components/software_app/navigation_bar/NavigationBar.js

    return (
        <div id="navigation-bar">
            <h1 id="navbar-logo-text">Easy Legal</h1>
            <hr className="horizontal-line-secondary" />
            <div id="navbar-content">
                <div className="navbar-buttons">
                    {
<<<<<<< HEAD:src/components/navigation_bar/NavigationBar.js
                        navigationSettings.map((setting) => (
                            <NavigationButton navigationSetting={setting} selectedCase={selectedCase}/>
=======
                        appNavigationSettings.map((setting, index) => (
                            <NavigationButton key={index} navigationSetting={setting} isSelected={path == setting.path} />
>>>>>>> 606e256786c2b972322a2e5162f407cb8b3c6e58:src/components/software_app/navigation_bar/NavigationBar.js
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