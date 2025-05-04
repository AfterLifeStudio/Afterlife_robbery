import { useRef, useState, useEffect } from "react";
import Fade from "../utils/fade";
import { NuiEvent } from "../hooks/NuiEvent";
import { useSelector } from "react-redux";
import alarmfile from "../assets/sound/alarm.mp3";
import seatbelttop from "../assets/images/seatbelttop.png";
import seatbeltbottom from "../assets/images/seatbeltbottom.png";

const Speedometer = () => {
  const audioelement = useRef();

  const [vehiclevisible, setVehicleVisible] = useState(false);

  const [vehicle, setVehicle] = useState({
    mileagec: false,
    mileage: 0,
    class: 0,
    speed: 0,
    fuel: 30,
    gear: 0,
    engine: 60,
    rpm: 0,
    seatbelt: true,
  });

  const handlevisible = (state) => {
    setVehicleVisible(state);
  };

  const handlespeedometer = (data) => {
    setVehicleVisible(data.show);
    setVehicle(data);
  };

  NuiEvent("speedometer", handlespeedometer);
  NuiEvent("speedometervisible", handlevisible);

  const settings = useSelector((state) => state.settings);

  let vehiclerpm = 220 

  vehiclerpm  = vehiclerpm - (vehicle.rpm * 220)



  // const mileage = Math.floor(vehicle.mileage).toString().padStart(8, "0");

  useEffect(() => {
    if (vehiclevisible && !vehicle.seatbelt && settings.seatbeltalarm) {
      audioelement.current.play();
    }
  }, [vehiclevisible, vehicle.seatbelt, settings.seatbeltalarm]);

  const gears = [0, 1, 2, 3, 4, 5, 6,7,8];

  const visible = settings.showspeedometer ? vehiclevisible : false;

  return (
    <>
      <Fade in={visible}>
        <>
        <div style={{transform: `scale(${settings.speedometersize / 50})`}} className="speedometer">
          <div className="rpm">
            <svg height="13vw" width="13vw">
              <circle
                className="outline"
                cx="50%"
                cy="50%"
                r="6vw"
                stroke="rgba(255, 255, 255, 0.4)"
                stroke-width=".5vw"
                fill="transparent"
              />
              <circle
                style={{ strokeDashoffset: vehiclerpm + "%" }}
                className="circlerpm"
                cx="50%"
                cy="50%"
                r="6vw"
                stroke="white"
                stroke-width=".5vw"
                fill="transparent"
              />
            </svg>
          </div>

          <div className="speed-icons">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M32 64C32 28.7 60.7 0 96 0L256 0c35.3 0 64 28.7 64 64l0 192 8 0c48.6 0 88 39.4 88 88l0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-154c-27.6-7.1-48-32.2-48-62l0-64L384 64c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3l0 13.5 0 24 0 32 0 152c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-32c0-22.1-17.9-40-40-40l-8 0 0 144c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32L32 64zM96 80l0 96c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16L112 64c-8.8 0-16 7.2-16 16z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
            </svg>
          </div>

          <div className="fuelengine">
            <svg height="13vw" width="13vw">
              <circle
                className="outline"
                cx="50%"
                cy="50%"
                r="6vw"
                stroke="rgba(255, 255, 255, 0.4)"
                stroke-width=".4vw"
                fill="transparent"
              />
              <circle
                style={{
                  strokeDashoffset: 200 - vehicle.fuel * 1.1 + "%",
                  clipPath: "polygon(0 0, 50% 0, 50% 100%, 0% 100%);",
                }}
                className="circlea"
                cx="50%"
                cy="50%"
                r="6vw"
                stroke="white"
                stroke-width=".4vw"
                fill="transparent"
              />
              <circle
                style={{
                  strokeDashoffset: 180 + vehicle.engine * 1.1 + "%",
                  clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%);",
                }}
                className="circlea"
                cx="50%"
                cy="50%"
                r="6vw"
                stroke="white"
                stroke-width=".4vw"
                fill="transparent"
              />
            </svg>
          </div>

          <div className="speedometer-inner">
            <div className="si-unit">{settings.mphkmh ? "MPH" : "KMH"}</div>
            <div className="velocity">
              {vehicle.speed < 10 && (
                <>
                  <span style={{opacity: '0.7'}}>0</span>
                  <span style={{opacity: '0.7'}}>0</span>
                  <span>{vehicle.speed}</span>
                </>
              )}

              {(vehicle.speed > 9 && vehicle.speed < 100) && (
                <>
                     <span style={{opacity: '0.7'}}>0</span>
                  <span>{vehicle.speed}</span>
                </>
              )}

              {vehicle.speed > 99 && (
                <>
                  <span>{vehicle.speed}</span>
                </>
              )}
            </div>
            <div className="gear">{vehicle.gear}</div>
          </div>

          <div className="rpm-numbers">
            {gears.map((gears, index) => (
              <div
                style={{
                  top:
                    (
                      50 +
                      35 *
                        Math.sin(
                          -0.0 * Math.PI - 2 * (1 / 12) * (index - 1) * Math.PI
                        )
                    ).toFixed(4) + "%",
                  left:
                    (
                      50 -
                      35 *
                        Math.cos(
                          -0.0 * Math.PI - 2 * (1 / 12) * (index - 1) * Math.PI
                        )
                    ).toFixed(4) + "%",
                }}
                className="number"
              >
                {gears}
              </div>
            ))}
          </div>
        </div>

        <div style={{animationName: vehicle.seatbelt ? 'none' : 'fadeseatbelt'}} className="seatbelt">
          <img className="top" style={{animationName: vehicle.seatbelt ? 'seatbelt' : 'none'}} src={seatbelttop} alt="" />
          <img className="bottom" style={{animationName: vehicle.seatbelt ? 'seatbelt2' : 'none'}} src={seatbeltbottom} alt="" />
        </div>
        </>
      </Fade>

      {vehiclevisible && !vehicle.seatbelt && settings.seatbeltalarm && (
        <audio ref={audioelement}  id="alarm" src={alarmfile} loop />
      )}
    </>
  );
};

export default Speedometer;
  