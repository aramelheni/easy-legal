import "./NavigationButton.css";

export default function NavigationButton({ navigationSetting }) {
    return (<button className="navigation-button">
        <div className="content">
            <img className="icon" alt={navigationSetting.title} src={navigationSetting.icon} />
            <p className="title">{navigationSetting.title}</p>
        </div>
    </button>)
}