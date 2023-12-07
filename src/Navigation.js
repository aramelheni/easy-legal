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
        title: "Example",
        icon: "/icons/calendar.png",
        path: "/example",
        component: AboutUs
    }
]