<<<<<<< HEAD
import Calendar from "./components/calendar/Calendar.js"

export const navigationSettings = [
    {
        title: "Calendar",
        icon: "/icons/calendar.png",
        path: "/calendar",
        element: (
            <Calendar />
        )
=======
import AccessDenied from "./components/error_pages/AccessDenied.js";
import Signin from "./components/guest_content/signin/Signin.js";
import Signup from "./components/guest_content/signup/Signup.js";

export const guestNavigationSettings = [
    {
        title: "Sign-up",
        path: "/signup",
        component: Signup
>>>>>>> 6fda0d85264c3675aee8fe7caad88efd7aeaeb7b
    },
    {
        title: "Sign-in",
        path: "/signin",
        component: Signin
    }
]

export const appNavigationSettings = [
    {
        title: "Client Page Exp1",
        icon: "/icons/calendar.png",
        path: "/example1",
        allowedRoles: ["client"],
        roleFailurePath:"/",
        component: ()=><p>This is the first client page</p>
    },
    {
        title: "Client Page Exp2",
        icon: "/icons/calendar.png",
        path: "/example2",
        allowedRoles: ["client"],
        roleFailurePath:"/",
        component: ()=><p>This is the second client page</p>
    }
]

///Routes that prevent all else from passing
export const boldNavigationSettings = [
    {
        path: "/access-denied",
        component: AccessDenied
    }
]
export const isCurrentRouteBold = (currentPath)=>{
    return boldNavigationSettings.some(settings => settings.path===currentPath);
}