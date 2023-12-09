import { Route, Routes } from "react-router-dom";
import { UserProvider } from "../../managers/User";
import GuestNavigationbar from "./guest_navbar/GuestNavigationbar";
import { guestNavigationSettings } from "../../Navigation.js";

export default function GuestApp() {
    return (
        <UserProvider>
            <GuestNavigationbar />
            <Routes>
                {
                    guestNavigationSettings.map((navigationSetting, index) => (
                        <Route
                            key={index}
                            path={navigationSetting.path}
                            element={<navigationSetting.component />}
                        />
                    ))
                }
            </Routes>
        </UserProvider>
    );
}