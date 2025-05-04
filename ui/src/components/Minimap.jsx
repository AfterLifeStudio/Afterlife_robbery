import { useState, useEffect } from "react";
import Fade from "../utils/fade";
import { NuiEvent } from "../hooks/NuiEvent";
import { useSelector } from "react-redux";
import healthicon from "../assets/images/heart.png";
import armouricon from "../assets/images/shield.png";
import thirsticon from "../assets/images/drop.png";
import hungericon from "../assets/images/burger.png";
import stressicon from "../assets/images/brain.png";


const Minimap = () => {
  const [status, setStatus] = useState({
    minimap: false,
    health: 50,
    armour: 0,
    oxygen: 0,
    hunger: 0,
    thirst: 0,
    stress: 0,
    voice: false,
    voicemode: 1,
  });

  const [waypoint, setWaypoint] = useState(false);
  const [dir, setDir] = useState(0);
  // const [newdir, setNewDir] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (dir != newdir) {

  //       if (Math.abs(dir - newdir) > 170){
  //         console.log(true)
  //         setDir(newdir)
  //       }else{
  //         if (dir < newdir) {
  //           setDir(dir + 1);
  //       } else {
  //         setDir(dir - 1);
  //       }
  //       }


  //     }
  //   }, 1);

  // }, [newdir,dir]);
  
  NuiEvent("minimapcompass", (data) => setDir((data.heading - 180)));


  var statusnames = [
    {
      top: 0,
      left: 0,
      icon: healthicon
    },
    {
      top: 0,
      left: 0,
      icon: armouricon
    },    
    {
      top: 0,
      left: 0,
      icon: hungericon
    },
    {
      top: 0,
      left: 0,
      icon: thirsticon
    },
    {
      top: 0,
      left: 0,
      icon: stressicon
    },

  ]

  if (status.minimap){
    statusnames = [
      {
        top: 1,
        left: 0,
        icon: healthicon
      },
      {
        top: 0,
        left: 0,
        icon: armouricon
      },    
      {
        top: 0,
        left: 0,
        icon: hungericon
      },
      {
        top: 1,
        left: 0,
        icon: thirsticon
      },
      {
        top: 3.2,
        left: -.7,
        icon: stressicon
      },
  
    ]
  } 
  

  const handlestatus = (data) => {
    setStatus(data);
  };

  NuiEvent("status", handlestatus);

  const handlevoicemode = (data) => {
  }

  NuiEvent("voicemode", handlevoicemode);

  NuiEvent("minimapwaypoint", (data) => setWaypoint(data));

  const settings = useSelector((state) => state.settings)

  return (
    <>
      <Fade in={settings.showminimap}>
        
        <div style={{height: status.minimap ? '17.2vw' : '4.5vw'}} className="minimap">

          <div style={{visibility: settings.playerstatus ? '' : 'hidden'}} className="playerstatus">

              <div
               style={{
                left: statusnames[0].left + 'vw',
                top: statusnames[0].top + 'vw',
               }}
               className="status">
                <img src={statusnames[0].icon} alt="" />
                <img style={{clipPath: `polygon(0 ${100 - status.health}%, 100% ${100 - status.health}%, 100% 100%, 0% 100%)`}} className="value" src={statusnames[0].icon} alt="" />
              </div>

              <div
               style={{
                left: statusnames[1].left + 'vw',
                top: statusnames[1].top + 'vw',
               }}
               className="status">
                <img src={statusnames[1].icon} alt="" />
                <img style={{clipPath: `polygon(0 ${100 - status.armour}%, 100% ${100 - status.armour}%, 100% 100%, 0% 100%)`}} className="value" src={statusnames[1].icon} alt="" />
              </div>

              <div
               style={{
                left: statusnames[2].left + 'vw',
                top: statusnames[2].top + 'vw',
               }}
               className="status">
                <img src={statusnames[2].icon} alt="" />
                <img style={{clipPath: `polygon(0 ${100 - status.hunger}%, 100% ${100 - status.hunger}%, 100% 100%, 0% 100%)`}} className="value" src={statusnames[2].icon} alt="" />
              </div>

              <div
               style={{
                left: statusnames[3].left + 'vw',
                top: statusnames[3].top + 'vw',
               }}
               className="status">
                <img src={statusnames[3].icon} alt="" />
                <img style={{clipPath: `polygon(0 ${100 - status.thirst}%, 100% ${100 - status.thirst}%, 100% 100%, 0% 100%)`}} className="value" src={statusnames[3].icon} alt="" />
              </div>

              <div
               style={{
                left: statusnames[4].left + 'vw',
                top: statusnames[4].top + 'vw',
               }}
               className="status">
                <img src={statusnames[4].icon} alt="" />
                <img style={{clipPath: `polygon(0 ${100 - status.stress}%, 100% ${100 - status.stress}%, 100% 100%, 0% 100%)`}} className="value" src={statusnames[4].icon} alt="" />
              </div>

          </div>

          {status.minimap &&
          <>
          <div style={{transform: `rotate(${-dir}deg) scale(${settings.minimapsize / 50})`}} className="map">
            <div style={{transform: `rotate(${dir}deg)`}} className="north">N</div>
          </div>

          <Fade in={waypoint ? true : false}>
          <div className="distance">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
          <p>{waypoint}KM</p>
          </div>
          </Fade>
          </>
          }
        </div>
      </Fade>
    </>
  );
};

export default Minimap;
