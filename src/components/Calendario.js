
import { useState } from "react";
import { BrowserRouter as Routes, Link, Route, Switch } from "react-router-dom";
import datos from '../Calendario.json';
import './Calendario.css';

const Buscador = ({valor}) => {
    return(
        <div>
            {/* {datos.map((past) => (past.mes == valor && past.visible == true)? 
            <p>{past.ubicacion} - {past.fecha} - {past.dia} - {past.hora} - {past.tanda} - {past.ingreso}</p>:null)} */}

<div
      style={{
        border: "20px"
      }}
    >
      {datos.map((past) => (past.mes == valor && past.visible == true)?<div>
        <table className="table table-warning table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th className="tipo">ubicacion</th>
              <th className="tipo">fecha</th>
              <th className="tipo">dia</th>
              <th className="tipo">hora</th>
              <th className="tipo">evento</th>
              <th className="tipo">ingreso</th>
            </tr>
          </thead>
          <tbody>            
                <tr key={past.id}>
                  <td className="table-secondary">{past.ubicacion}</td>
                  <td className="table-secondary">{past.fecha}</td>
                  <td className="table-secondary">{past.dia}</td>
                  <td className="table-secondary">{past.hora}</td>
                  <td className="table-secondary">{past.evento}</td>
                  <td className="table-secondary">{past.ingreso}</td>
                </tr>
            
          </tbody>
        </table>
      </div>:null)}
    </div>
        </div>
    )
}
export default function Calendario() {
    const [mes, setMes] = useState();
    return(
        <div className="header-calendary">
            <Routes>    
            <h1 className="title-calendary">Actividades 2022</h1>
            <div className="months">
            <table className="table table-dark table-striped table-hover table-bordered">                
                <thead>            
                    <tr>                
                        <th style={{ width: 80 }}><Link to={'/buscador'}><button className="meses" onClick={() => setMes("enero")}>enero</button></Link></th>
                        <th style={{ width: 80 }}><Link to={'/buscador'}><button className="meses" onClick={() => setMes("febrero")}>Febrero</button></Link></th>
                        <th style={{ width: 80 }}><Link to={'/buscador'}><button className="meses" onClick={() => setMes("marzo")}>Marzo</button></Link></th>
                        <th style={{ width: 80 }}><Link to={'/buscador'}><button className="meses" onClick={() => setMes("abril")}>Abril</button></Link></th>
                        <th style={{ width: 80 }}><Link to={'/buscador'}><button className="meses" onClick={() => setMes("mayo")}>Mayo</button></Link></th>
                        <th style={{ width: 80 }}><Link to={'/buscador'}><button className="meses" onClick={() => setMes("junio")}>Junio</button></Link></th>
                        <th style={{ width: 80 }}><Link to={'/buscador'}><button className="meses" onClick={() => setMes("julio")}>Julio</button></Link></th>
                        <th style={{ width: 80 }}><Link to={'/buscador'}><button className="meses" onClick={() => setMes("agosto")}>Agosto</button></Link></th>
                        <th style={{ width: 80 }}><Link to={'/buscador'}><button className="meses" onClick={() => setMes("septiembre")}>Septiembre</button></Link></th>
                        <th style={{ width: 80 }}><Link to={'/buscador'}><button className="meses" onClick={() => setMes("octubre")}>Octubre</button></Link></th>
                        <th style={{ width: 80 }}><Link to={'/buscador'}><button className="meses" onClick={() => setMes("noviembre")}>Noviembre</button></Link></th>
                        <th style={{ width: 80 }}><Link to={'/buscador'}><button className="meses" onClick={() => setMes("diciembre")}>Diciembre</button></Link></th>
                    </tr>            
                </thead>        
            </table>
            </div>

            <Switch>        
                <Route path={'/buscador'}><Buscador valor={mes}/></Route>
            </Switch>                        
                        </Routes>
        </div>
    );
}