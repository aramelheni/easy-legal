import Chat from "./components/Chat/Chat.js";
import AccessDenied from "./components/error_pages/AccessDenied.js";
import Signin from "./components/guest_content/signin/Signin.js";
import Signup from "./components/guest_content/signup/Signup.js";
import Calendar from "./components/calendar/Calendar.js";
import Cases from "./components/cases/Cases.js"

//Navigation settings for the Guest Content
export const guestNavigationSettings = [
    {
        title: "Sign-up",
        path: "/signup",
        component: Signup
    },
    {
        title: "Sign-in",
        path: "/signin",
        component: Signin
    }
]

//Navigation settings for the Software app
export const appNavigationSettings = [
    {
        title: "Chat",
        icon: "/icons/chat.png",
        path: "/chats",
        allowedRoles: [],
        requiresActiveCase: false,
        customPaper: true,
        roleFailurePath: "/",
        component: Chat
    },
    {
        title: "Cases",
        icon: "/icons/cases.png",
        path: "/cases",
        allowedRoles: [],
        requiresActiveCase: false,
        roleFailurePath: "/",
        component: Cases
    },
    {
        title: "Calendar",
        icon: "/icons/calendar.png",
        path: "/calendar",
        allowedRoles: [],
        requiresActiveCase: true,
        roleFailurePath: "/signin",
        component: Calendar
    }
]

///Routes that prevent all else from rendering
export const boldNavigationSettings = [
    {
        path: "/access-denied",
        component: AccessDenied
    }
]
export const isCurrentRouteBold = (currentPath) => {
    return boldNavigationSettings.some(settings => settings.path === currentPath);
}