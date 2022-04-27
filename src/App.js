import React from 'react';
import Page from './components/Page';
import VentanaFormulario from './components/VentanaFormulario';

function App() {                         
  return (
    <div>
      {window.confirm("desea saltar el registro?")? <Page/>:<VentanaFormulario/>}
    </div>
  )
}

export default App;
