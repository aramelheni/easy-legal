import { Link } from "react-router-dom";
import "./NavigationButton.css";

export default function NavigationButton({ navigationSetting, isSelected, isCaseSelected }) {
    const { path, title, icon, requiresActiveCase } = navigationSetting;

    const isVisible = (requiresActiveCase && isCaseSelected) || !requiresActiveCase;
    console.log(title, "is silent",isVisible);

    const content = (<>
        <img className="icon" alt={title} src={icon} />
        <p className="title">{title}</p>
    </>);
    if (isSelected || !isVisible) //unclickable
    {
        return (
            <div className={"navigation-button " + (isVisible ? "active" : "silent")}>
                {content}
            </div>
        );
    } else {
        return (
            <Link className="navigation-button inactive" to={path}>
                {content}
            </Link>
        );
    }
}