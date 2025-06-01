import './App.css'

import { useState } from 'react';
import Fade from './utils/fade';
import { NuiEvent } from './hooks/NuiEvent';
import Desktop from './components/desktop.jsx'
function App() {

  const [visible, setVisible] = useState(false);
  
  const handlevisible = (data) => {

    setVisible(data);
  };
  NuiEvent("desktop", handlevisible);




  return (
    <>
    <Fade in={visible}>
      <Desktop />
    </Fade>
    </>
  )
}

export default App
