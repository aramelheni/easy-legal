import Calendar from "./components/calendar/Calendar.js"

export const navigationSettings = [
    {
        title: "Calendar",
        icon: "/icons/calendar.png",
        path: "/calendar",
        element: (
            <Calendar />
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