import Documents from "./components/documents/Documents";

export const navigationSettings = [
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
    },
    {
        title: "Documents",
        icon: "/icons/chat.png",
        path: "/documents",
        element: <Documents />
    }
]