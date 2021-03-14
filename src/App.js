import React, { Fragment, useState, useEffect } from "react";
import Clima from "./components/Clima";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Error from "./components/Error";

function App() {
  const [search, setSearch] = useState({
    ciudad: "",
    pais: "",
  });
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);

  const { ciudad, pais } = search;

  useEffect(() => {
    const consultaAPI = async () => {
      if (consultar) {
        const appId = "250b1a21df32eb2602b9372e8fb06a67";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const resp = await fetch(url);
        const resultado = await resp.json();

        setResultado(resultado);
        setConsultar(false);

        //Detecta si hubo resultados correctos en la consulta
        if (resultado.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    consultaAPI();
  }, [consultar]);

  let componente;
  if (error) {
    componente = <Error mensaje="No hat resultados" />;
  } else {
    componente = <Clima resultado={resultado} />;
  }

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
            <div className="col m6 s12">{componente}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
