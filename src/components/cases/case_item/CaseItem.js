import "./CaseItem.css"

export default function CaseItem({title, status}){
    return (
        <div className="case-item">
            <p className="case-title">{title}</p>
            <p>{status}</p>
        </div>
    );
}