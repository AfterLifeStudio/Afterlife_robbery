import { React, useEffect, useState } from "react";
import "./settings.css";
import Fade from "../../utils/fade";
import settingsicon from "../../assets/images/settings.png";
import Select from "./select";
import Button from "./button";
import Sliders from "./slider";
import { NuiEvent } from "../../hooks/NuiEvent";
import { nuicallback } from "../../utils/nuicallback";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { update } from "../../store/settings/settingsSlice";
import { settingsdata } from "./settingsdata";

const Settings = () => {
  const [visible, setVisible] = useState(false);
  const [description, setDescription] = useState("");
  const [SettingsData, setSettingsData] = useState(settingsdata);

  const dispatch = useDispatch();

  let optionscomponent = [];

  const handlesettings = (data) => {
    dispatch(update(data.settings));
    setSettingsData([]);
    setSettingsData(data.configsettings);
    setVisible(data.visible);
  };

  const handleupdatesettings = (data) => {
    dispatch(update(data.settings));
    setSettingsData(data.configsettings);
  };

  NuiEvent("settings", handlesettings);

  NuiEvent("updatesettings", handleupdatesettings);

  const handlehover = (value) => {
    // setDescription(value)
  };

  const handlekey = (action) => {
    nuicallback(action, SettingsData);
    setVisible(false);
  };

  useEffect(() => {
    const handlekey = (e) => {
      if (visible) {
        if (e.code == "Escape") {
          nuicallback("exitsettings", SettingsData);
          setVisible(false);
        }
        // } else if (e.code == "Enter") {
        //   nuicallback("settingsconfirm");
        //   setVisible(false);
        // } else if (e.code == "Backspace") {
        //   nuicallback("settingsreset");
        //   setVisible(false);
        // }
      }
    };

    window.addEventListener("keydown", handlekey);
    return () => window.removeEventListener("keydown", handlekey);
  });

  const catagories = ["general", "minimap", "speedometer", "compass"];

  return (
    <>
      <Fade in={visible}>
        <div className="settings-wrapper">
          <div className="settings-background"></div>
          <div className="settings-title">
            
          </div>
          <div className="settings-container">

            <div className="settings">
              <div className="settings-options">
                {catagories.map((catagory) => (
                  <>
                    <div className="catagory">{catagory}</div>
                    {SettingsData.map(
                      (data) =>
                        data.category == catagory && (
                          <div className="settings-options">
                            {data.type == "select" ? (
                              <div
                                onMouseOver={() =>
                                  handlehover(data.description)
                                }
                              >
                                <Select
                                  title={data.label}
                                  description={data.description}
                                  name={data.name}
                                  icon={data.icon}
                                  value={data.value}
                                  option1={data.option1}
                                  option2={data.option2}
                                />
                              </div>
                            ) : data.type == "button" ? (
                              <div
                                onMouseOver={() =>
                                  handlehover(data.description)
                                }
                              >
                                <Button
                                  title={data.label}
                                  icon={data.icon}
                                  description={data.description}
                                  name={data.name}
                                  value={data.value}
                                />
                              </div>
                            ) : (
                              <div
                                onMouseOver={() =>
                                  handlehover(data.description)
                                }
                              >
                                <Sliders
                                  title={data.label}
                                  icon={data.icon}
                                  description={data.description}
                                  name={data.name}
                                  value={data.value}
                                />
                              </div>
                            )}
                          </div>
                        )
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Settings;
