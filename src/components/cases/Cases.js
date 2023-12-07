import { useEffect, useState } from "react";
import "./Cases.css"
import CaseItem from "./case_item/CaseItem";
import getCases from "../../utilities/CaseUtilities";
import Loader from "../loader/Loader.js"

export default function Cases({ selectedCase, setSelectedCase }) {
    const [cases, setCases] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getCasesFromServer = async () => {
            setIsLoading(true);

            const fetchedCases = await getCases();
            if (fetchedCases != null) {
                setCases(fetchedCases);
                if (selectedCase == null)
                    setSelectedCase(fetchedCases[0]);
            }
            else
                setCases([])

            setIsLoading(false);
        };
        getCasesFromServer();
    }, []);

    const handleAddCase = () => {

    }

    const handleCaseSelect = (theCase) => {
        setSelectedCase(theCase);
    }

    return (
        <div className="cases">
            {isLoading && <Loader />}
            <div className="cases-top-bar">
                <button onClick={handleAddCase}>Add a new case</button>
            </div>
            <div className="cases-content-columns">
                <p>Case Title</p>
                <p>Status</p>
                <p>Filling Deadline</p>
                <p>Submission Deadline</p>
            </div>
            <div className="cases-content">
                {
                    (cases != null && selectedCase != null) &&
                    cases.map((theCase, index) => (
                        <CaseItem key={index} theCase={theCase} onSelect={handleCaseSelect} isSelected={selectedCase._id === theCase._id} />
                    ))
                }
            </div>
        </div>
    );
}