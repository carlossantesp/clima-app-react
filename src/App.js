import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

function App() {
  const [search, setSearch] = useState({
    ciudad: "",
    pais: "",
  });
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});

  const { ciudad, pais } = search;

  useEffect(() => {
    const consultaAPI = async () => {
      if (consultar) {
        const appId = "250b1a21df32eb2602b9372e8fb06a67";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const resp = await fetch(url);
        const resultado = await resp.json();

        setResultado(resultado);
      }
    };
    consultaAPI();
  }, [consultar]);

  return (
    <Fragment>
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                search={search}
                setSearch={setSearch}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
