import { React, useState, useEffect } from "react";
import Fade from "../utils/fade";
import Minimap from "./Minimap";
import Speedometer from "./Speedometer";
import Compass from "./Compass";
import Settings from "./settings/settings";
import { NuiEvent } from "../hooks/NuiEvent";
import { useSelector } from "react-redux";
import Info from "./Info";
import Notifications from "./notification";
import TextUI from "./textui";
const Hud = () => {
  const [visible, setVisible] = useState(false);

  const settings = useSelector((state) => state.settings)
  const handlevisible = (data) => {
    setVisible(data);
  };
  NuiEvent("visible", handlevisible);

  const show = settings.showhud ? visible : false
  return (
    <>
    
      <Fade in={show}>
        {settings.cinematicmode ? (
          <div className="cinemticbars">
            <div></div>
            <div></div>
          </div>
        ) : (
          <>
            <Info />
            <Speedometer />
            <Minimap />
            <Compass />
            <Notifications />
            <TextUI />
          </>
        )}
      </Fade>
      
      <Settings />

    </>
  );
};

export default Hud;
