import Spinner from "../loaders/Spinner";
import "./Loader.css"

export default function Loader(){
    return(
        <div className="loader">
            <Spinner/>
        </div>
    );
}