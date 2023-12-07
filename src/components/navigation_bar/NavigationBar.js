import "./NavigationBar.css"
import NavigationButton from "./button/NavigationButton";
import { navigationSettings } from "../../Navigation";
import AccountPanel from "./account_panel/AccountPanel";

export default function NavigationBar({ selectedCase }) {
    return (
        <div id="navigation-bar">
            <h1 id="navbar-logo-text">Easy Legal</h1>
            <hr className="horizontal-line" />
            <div id="navbar-content">
                <div className="navbar-buttons">
                    {
                        navigationSettings.map((setting) => (
                            <NavigationButton navigationSetting={setting} selectedCase={selectedCase}/>
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