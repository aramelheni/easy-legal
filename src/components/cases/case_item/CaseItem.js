import "./CaseItem.css"

export default function CaseItem({ theCase, onSelect, isSelected }) {
    const { title, status } = theCase;

    const handleSelect = () => {
        onSelect(theCase);
    }

    return (
        <div className="case-item" onClick={handleSelect}>
            <p className="case-title">{title}</p>
            <div>
                {isSelected && <p className="case-selected">Selected</p>}
            </div>
            <div>
                <p className={status === "open" ? "case-status-open" : "case-status-closed"}>{status}</p>
            </div>
            <div>
                <p>06 12 2023</p>
            </div>
            <div>
                <p>13 06 2024</p>
            </div>
        </div>
    );
}