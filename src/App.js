import React, { useState, useEffect } from "react";
import { api } from "./config/api";
import Clima from "./components/Clima";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Error from "./components/Error";
import Spinner from "./components/Spinner";
import {
  Container,
  Wrapper,
  MainSection,
  AsideSection,
} from "./styles/StyledApp";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState({
    ciudad: "",
    pais: "",
  });
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { ciudad, pais } = search;

  useEffect(() => {
    const consultaAPI = async () => {
      if (consultar) {
        const url = `${api.url}/data/${api.version}/weather?q=${ciudad},${pais}&appid=${api.key}&lang=es&units=metric`;

        const resp = await fetch(url);
        const resultado = await resp.json();
        setResultado(resultado);
        setConsultar(false);
        setLoading(false);

        //Detecta si hubo resultados correctos en la consulta
        if (resultado.cod === "404") {
          setError(true);
          setLoading(false);
        } else {
          setError(false);
        }
      }
    };
    consultaAPI();
    // eslint-disable-next-line
  }, [consultar]);

  let componente;
  if (error) {
    componente = <Error mensaje="No hay resultados" />;
  } else {
    componente = <Clima resultado={resultado} />;
  }

  return (
    <Container>
      <Header titulo="Weather App" />
      <Wrapper>
        <AsideSection>
          <Formulario
            search={search}
            setSearch={setSearch}
            setConsultar={setConsultar}
            setLoading={setLoading}
            loading={loading}
          />
        </AsideSection>
        <MainSection>{loading ? <Spinner /> : componente}</MainSection>
      </Wrapper>
      <Footer autor="Carlos Santillan" />
    </Container>
  );
}

export default App;
