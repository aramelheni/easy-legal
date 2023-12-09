import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../../managers/User";
import "./AccountPanel.css";

export default function AccountPanel() {
    const navigate = useNavigate();
    const {signOut, getUserFullName, getUserRole } = useUserContext();

    return (<div className="account-panel">
        <img className="profile-picture" alt={"Youssef Jaziri"} src="/logo192.png" />
        <div className="textual-content">
            <p className="account-name">{getUserFullName()}</p>
            <p className="account-type">{getUserRole()}</p>
        </div>
        <button style={{ fontSize: "5px", margin: 0 }} onClick={() => {
            signOut();
            navigate("/");
            window.location.reload();
        }}>
            Sign out
        </button>
    </div>);
}