import { useState } from "react";
import { NuiEvent } from "../hooks/NuiEvent";
import Notify from "./notify";

function Notifications() {
  const [Data, setData] = useState([]);



  NuiEvent('notification',(message) => {
    setData((Data) => [...Data,message])
  })

  return (
    <>

    {/* <button onClick={(e) => {
      let newdata = {
        icon: 'info',
        title: 'NOTIFICATION',
        duration: 1000,
        description: 'Whereas disregard and contempt for human rights have resulted'
      }
      setData((Data) => [...Data,newdata])
     

    }}>NOTIFICATION</button> */}

    <div className="notifications">
    {Data.map(data => (
     <Notify data={data} />
      ))}
      </div>
    </>
  );
}

export default Notifications;
