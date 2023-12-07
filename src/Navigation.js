import AboutUs from "./components/guest_content/about_us/AboutUs.js";
import Signin from "./components/guest_content/signin/Signin.js";
import Signup from "./components/guest_content/signup/Signup.js";

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

export const appNavigationSettings = [
    {
        title: "About Us",
        icon: "/icons/calendar.png",
        path: "/aboutus",
        component: AboutUs
    },
    {
        title: "Calendar",
        icon: "/icons/calendar.png",
        path: "/app/calendar",
        element: ()=>(
            <div>
                CALENDAAAAAR
            </div>
        )
    },
    {
        title: "Chat",
        icon: "/icons/chat.png",
        path: "/app/chat",
        element: (
            <div>
                CHAT
            </div>
        )
    }
]