import { useState } from "react"
import wallpaper from "../assets/fleecawallpaper.png"
import trojanimage from "../assets/trojan.png"
import logoutimage from "../assets/logout.png"
const Desktop = () => {


    return(
        <>
        <div className="desktop">
            <div className="wallpaper" style={{backgroundImage: `url(${wallpaper})`}}></div>
            <div className="windows-applications">
                <div className="application trojan">
                    <img src={trojanimage} alt="" />
                    <div>Trojan usb</div>
                </div>
                <div className="application logout">
                    <img src={logoutimage} alt="" />
                    <div>Logout</div>
                </div>
            </div>
            <div className="windows-taskbar">
                <div className="windows-icon"></div>
            </div>

            <div className="trojan-application">
                
            </div>
        </div>
        </>
    )
}

export default Desktop;