import "./Cases.css"
import CaseItem from "./case_item/CaseItem";

export default function Cases() {
    const cases = [
        {
            title: "First case",
            status: "Open"
        },
        {
            title: "Second case",
            status: "Closed"
        }
    ]

    return (
        <div className="cases">
            <div className="cases-top-bar">
                <button>Add a new document</button>
            </div>
            <div className="cases-content">
             {
                    cases.map((c, index) => (
                        <CaseItem key={index} {...c}/>
                    ))
                }
            </div>
        </div>
    );
}