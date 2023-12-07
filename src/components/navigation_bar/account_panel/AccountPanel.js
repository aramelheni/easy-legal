import "./AccountPanel.css";

export default function AccountPanel() {
    return (<div className="account-panel">
        <img className="profile-picture" alt={"Youssef Jaziri"} src="/lawyer.png" />
        <div className="textual-content">
            <p className="account-name">Youssef Jaziri</p>
            <p className="account-type">Lawyer</p>
        </div>
    </div>);
}