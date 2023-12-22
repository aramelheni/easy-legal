import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
import { boldNavigationSettings, isCurrentRouteBold } from "./Navigation";
import { Route, useLocation } from "react-router-dom";
import { useUserContext } from "./managers/User";
import SoftwareApp from "./components/software_app/SoftwareApp.js"
import GuestApp from "./components/guest_content/GuestApp.js";
import { socketio } from "./managers/Socket.js";

import { useEffect } from "react";

function App() {
  const currentPath = useLocation().pathname;

  useEffect(() => {
    return () => {
      socketio.disconnect();
    }
  }, []);

  const boldRoutes = () => (
    boldNavigationSettings.map((navigationSetting, index) => (
      <Route
        key={index}
        path={navigationSetting.path}
        element={<navigationSetting.component />}
      />
    ))
  );

  const { isSignedIn } = useUserContext();
  return (
    <>
      <Routes>
        {boldRoutes()}
      </Routes>
      {!isCurrentRouteBold(currentPath) &&
        (isSignedIn() ? <SoftwareApp /> : <GuestApp />)
      }
    </>
  );
}

export default App;