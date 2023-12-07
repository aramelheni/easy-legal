import { Link } from "react-router-dom";
import "./NavigationButton.css";

export default function NavigationButton({ navigationSetting, selectedCase }) {
    const { path, title, icon, requiresActiveCase } = navigationSetting;
    const isSilent = (requiresActiveCase && selectedCase) || !requiresActiveCase;

    const buttonContent = (<>
        <img className="nav-button-icon" alt={title} src={icon} />
        <p className="nav-button-title">{title}</p>
    </>);

    if (isSilent) {
        return (
            <Link className="nav-button nav-button-active" to={path}>
                {buttonContent}
            </Link>
        );

    } else {
        return (<div className="nav-button nav-button-silent">
            {buttonContent}
        </div>);
    }
}