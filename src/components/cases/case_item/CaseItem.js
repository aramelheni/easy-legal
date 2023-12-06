import "./CaseItem.css"

export default function CaseItem({ title, status }) {
    return (
        <div className="case-item">
            <p className="case-title">{title}</p>
            <div>
                <p className={status=="Open"? "case-status-open":"case-status-closed"}>{status}</p>
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