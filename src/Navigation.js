import Chat from "./components/Chat/Chat.js";

export const navigationSettings = [
    {
        title: "Calendar",
        icon: "/icons/calendar.png",
        path: "/calendar",
        customPaper: false,
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
        customPaper: true,
        element: (<Chat />)
    }
]