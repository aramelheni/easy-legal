import axios from "axios"
import apiUrl from "../apiConfig.js";

export default async function getCases() {
    let cases = null;
    await axios.get(apiUrl + "/cases").then(response => {
        cases = response.data.result;
    }).catch(error => {
        console.log("Error fetching cases:", error);
    });
    return cases;
}