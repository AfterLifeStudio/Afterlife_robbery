import { useState } from "react";

import { NuiEvent } from "../hooks/NuiEvent";

function TextUI() {
  const [Data, setData] = useState(false);

  NuiEvent('textui',(message) => setData(message))

  return (
    Data && (
      <>
        <div className="textui">

          <div className="textui-icon">
            <span class="material-symbols-outlined">
              {Data.icon ? Data.icon : "info"}
            </span>
          </div>
          
          <div className="textui-text">{Data.label}</div>
        </div>
      </>
    )
  );
}

export default TextUI;
