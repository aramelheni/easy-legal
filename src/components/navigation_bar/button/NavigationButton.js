import { Link } from "react-router-dom";
import "./NavigationButton.css";

export default function NavigationButton({ navigationSetting }) {
    return (
        <Link className="navigation-button" to={navigationSetting.path}>
            <img className="icon" alt={navigationSetting.title} src={navigationSetting.icon} />
            <p className="title">{navigationSetting.title}</p>
        </Link>
    )
}