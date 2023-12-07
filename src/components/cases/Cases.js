import { useContext, useEffect, useState } from "react";
import "./Cases.css"
import CaseItem from "./case_item/CaseItem";
import getCases from "../../utilities/CaseUtilities";
import Loader from "../loader/Loader.js"
import { AppContext } from "../app/SoftwareApp.js";

export default function Cases() {
    const { selectedCase, setSelectedCase } = useContext(AppContext);
    const [cases, setCases] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getCasesFromServer = async () => {
            setIsLoading(true);

            const fetchedCases = await getCases();
            if (fetchedCases != null) {
                setCases(fetchedCases);
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
        if (theCase == selectedCase)
            setSelectedCase(null);
        else
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
                    (cases != null) &&
                    cases.map((theCase, index) => (
                        <CaseItem
                            key={index}
                            theCase={theCase}
                            onSelect={handleCaseSelect}
                            isSelected={selectedCase != null && selectedCase._id === theCase._id}
                        />
                    ))
                }
            </div>
        </div>
    );
}