import { Link } from "react-router-dom";
import "./NavigationButton.css";

export default function NavigationButton({ navigationSetting, isSelected }) {
    const content = (<>
        <img className="icon" alt={navigationSetting.title} src={navigationSetting.icon} />
        <p className="title">{navigationSetting.title}</p>
    </>);

    if (isSelected) {
        return (
            <div className="navigation-button active">
                {content}
            </div>
        );
    } else {
        return (
            <Link className="navigation-button inactive" to={navigationSetting.path}>
                {content}
            </Link>
        );
    }
}