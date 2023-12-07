import Cases from "./components/cases/Cases";

export const navigationSettings = [
    {
        title: "Cases",
        icon: "/icons/cases.png",
        path: "/cases",
        requiresActiveCase: false,
        component: Cases
    },
    {
        title: "Calendar",
        icon: "/icons/calendar.png",
        path: "/calendar",
        requiresActiveCase: true,
        component: () => <div><p>CALENDAAAAAR</p></div>
    },
    {
        title: "Chat",
        icon: "/icons/chat.png",
        path: "/chat",
        requiresActiveCase: false,
        component: () => <div><p>chatatatatat</p></div>
    }
]