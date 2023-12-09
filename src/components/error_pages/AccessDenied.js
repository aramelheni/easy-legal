import { Link } from "react-router-dom";

export default function AccessDenied(){
    return(<div>
        <p>You do not have permission to access this page. </p>
        <Link to="/">Go Back</Link>
    </div>);
}