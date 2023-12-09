import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../managers/User";
import "./AccountPanel.css";

export default function AccountPanel() {
    const navigate = useNavigate();
    const {signOut} = useUser();

    return (<div className="account-panel">
        <img className="profile-picture" alt={"Youssef Jaziri"} src="/logo192.png" />
        <div className="textual-content">
            <p className="account-name">Youssef Jaziri</p>
            <p className="account-type">Lawyer</p>
        </div>
        <button style={{ fontSize: "5px", margin: 0 }} onClick={() => {
            console.log(signOut);
            signOut();
            navigate("/");
            window.location.reload();
        }}>
            Sign out
        </button>
    </div>);
}