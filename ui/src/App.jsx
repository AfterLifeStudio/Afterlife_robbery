import './App.css'
import Hud from './components/Hud'
import { useState } from 'react';
import Fade from './utils/fade';
import { NuiEvent } from './hooks/NuiEvent';
function App() {

  const [visible, setVisible] = useState(true);
  
  const handlevisible = (data) => {
    setVisible(data);
  };
  NuiEvent("visiblehud", handlevisible);


  return (
    <>
    <Fade in={visible}>
      <Hud />
    </Fade>
    </>
  )
}

export default App
