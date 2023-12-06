import Cases from "./components/cases/Cases";

export const navigationSettings = [
    {
        title: "Cases",
        icon: "/icons/cases.png",
        path: "/cases",
        element: <Cases />
    },
    {
        title: "Calendar",
        icon: "/icons/calendar.png",
        path: "/calendar",
        element: (
            <div>
                CALENDAAAAAR
            </div>
        )
    },
    {
        title: "Chat",
        icon: "/icons/chat.png",
        path: "/chat",
        element: (
            <div>
                CHAT
            </div>
        )
    }
]