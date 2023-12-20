import Spinner from "../loaders/Spinner";
import "./Loader.css"

export default function Loader({fit}){
    return(
        <div className={`loader ${fit? "fit-loader":"fullscreen-loader"}`}>
            <Spinner/>
        </div>
    );
}