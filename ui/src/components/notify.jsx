import { useEffect, useState } from "react";
import Fade from "../utils/fade";

function Notify(notificationdata){
    const [visible, setVisible] = useState(true)
    const data = notificationdata.data

    useEffect(() => {
      setTimeout(() => {
        setVisible(false)
      }, data.duration ? data.duration : 3000);
    }, [])
    

    return (
        <Fade in={visible}>
        <div  className="notification-wrapper">
        <div className="notification-icon">
          <span class="material-symbols-outlined">{data.icon ? data.icon : 'info'}</span>
        </div>

        <div className="notification-line"></div>
        <div className="notification-container">
        <div className="notification-title">{data.title}</div>
        <div className="notification-description">{data.description}</div>
      </div>
    </div>
    </Fade>
    )
}

export default Notify;