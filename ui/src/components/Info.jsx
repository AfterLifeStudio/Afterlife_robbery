import { React, useState, useEffect } from "react";
import Fade from "../utils/fade";
import { NuiEvent } from "../hooks/NuiEvent";
import { useSelector } from "react-redux";
import AnimatedNumber from "animated-number-react";


const Info = () => {
  const [info, setInfo] = useState({
    id: 0,
    bank: 2000,
    cash: 140,
    job: "Police - Officer",
    show: {
      bank: true,
      cash: true,
      job: true,
    }
  });

  const settings = useSelector((state) => state.settings);

  const handleinfo = (data) => {
    setInfo(data);
  };
  NuiEvent("info", handleinfo);


  const formatValue = (value) => value.toFixed(0);
  

  return (
    <>
      <Fade in={settings.showinfo}>
        <div class="info-wrapper">
          <div class="info-container">

          <Fade in={settings.dynamicinfo ? info.show.job : true}>
            <div class="info">
              <span  >{info.job}</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z"/></svg>
              
            </div>
            </Fade>


            <Fade in={settings.dynamicinfo ? info.show.bank : true}>
            <div class="info">
              <span>$</span>
              <AnimatedNumber formatValue={formatValue} value={info.bank}/>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M400 96l0 .7c-5.3-.4-10.6-.7-16-.7L256 96c-16.5 0-32.5 2.1-47.8 6c-.1-2-.2-4-.2-6c0-53 43-96 96-96s96 43 96 96zm-16 32c3.5 0 7 .1 10.4 .3c4.2 .3 8.4 .7 12.6 1.3C424.6 109.1 450.8 96 480 96l11.5 0c10.4 0 18 9.8 15.5 19.9l-13.8 55.2c15.8 14.8 28.7 32.8 37.5 52.9l13.3 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-32 0c-9.1 12.1-19.9 22.9-32 32l0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-128 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64c-34.9-26.2-58.7-66.3-63.2-112L68 304c-37.6 0-68-30.4-68-68s30.4-68 68-68l4 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-4 0c-11 0-20 9-20 20s9 20 20 20l31.2 0c12.1-59.8 57.7-107.5 116.3-122.8c12.9-3.4 26.5-5.2 40.5-5.2l128 0zm64 136a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"/></svg>
            </div>
            </Fade>

            <Fade in={settings.dynamicinfo ? info.show.cash : true}>
            <div class="info">
              <span>$</span>
              <AnimatedNumber formatValue={formatValue} value={info.cash}/>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm64 320l-64 0 0-64c35.3 0 64 28.7 64 64zM64 192l0-64 64 0c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64l0 64-64 0zm64-192c-35.3 0-64-28.7-64-64l64 0 0 64zM176 256a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm76-48c0 9.7 6.9 17.7 16 19.6l0 48.4-4 0c-11 0-20 9-20 20s9 20 20 20l24 0 24 0c11 0 20-9 20-20s-9-20-20-20l-4 0 0-68c0-11-9-20-20-20l-16 0c-11 0-20 9-20 20z"/></svg>

            </div>
            </Fade>

            <Fade in={settings.dynamicinfo ? info.show.cash : true}>
            <div class="info">
              <span>{info.id}</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
            </div>
            </Fade>


          </div>
        </div>
      </Fade>
    </>
  );
};

export default Info;
