import Cases from "./components/cases/Cases";

export const navigationSettings = [
    {
        title: "Cases",
        icon: "/icons/cases.png",
        path: "/cases",
        component: Cases
    },
    {
        title: "Calendar",
        icon: "/icons/calendar.png",
        path: "/calendar",
        component: () => <div><p>CALENDAAAAAR</p></div>
    },
    {
        title: "Chat",
        icon: "/icons/chat.png",
        path: "/chat",
        component: () => <div><p>chatatatatat</p></div>
    }
]