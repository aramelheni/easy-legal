import { Navigate } from "react-router-dom";
import { useUserContext } from "./managers/User";

export default function PrivateRoute({ allowedRoles, children }) {
    const { getUserRole } = useUserContext();
    const userRole = getUserRole();
    //console.log(userRole + " is trying to access a page for", allowedRoles);
    if (userRole) {
      if (allowedRoles.includes(userRole)) {
        return <>{children}</>;
      } else {
        return <Navigate to="/access-denied" />;
      }
    }
    else {
      // No valid token or role, redirect to the login page
      return <Navigate to="/signin" />; // Adjust the redirect route as needed
    }
  }