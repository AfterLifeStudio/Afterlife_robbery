import { useState, useEffect } from "react";
import { NuiEvent } from "../hooks/NuiEvent";
import { useSelector } from "react-redux";
import Fade from "../utils/fade";
import waypointicon from "../assets/images/waypoint.png"

const Compass = () => {
  const [compassvisible,SetCompassVisible] = useState(true)
  const [compass, setCompass] = useState({
    heading: 180,
    location: 'Legion Square'
  });

  const [waypoint, setWaypoint] = useState(40)

const settings = useSelector((state) => state.settings)
const visible = settings.showcompass ? compassvisible : false 



const handlevisible = (state) =>{
  SetCompassVisible(state)
}

const handlecompass = (data) => {
  SetCompassVisible(true)
  setCompass(data);
};

NuiEvent("waypoint", (data) => setWaypoint(data));
NuiEvent("compass", handlecompass);
NuiEvent("compassvisible", handlevisible);




  return (
    <>
    <Fade in={visible}>
      <div style={{transform: `scale(${settings.compassize / 50}) translate(-50%,-50%)`}}  className="compass-wrapper">
    

      <div className="direction">
        <p>{compass.heading}</p>
        <div></div>
      </div>

    <div className="compass-container">



      <div className="compass-icons">
        <img style={{  transform: `translate(${waypoint * 0.8 }vw,0)`}} src={waypointicon} alt="" />
      </div>
      <div className="line"></div>
    </div>

      <div style={{opacity: settings.showstreet ? '1.0' : '0.0'}} className="location">{compass.location}</div>

  </div>
  </Fade>
    </>
  );
};

export default Compass;
