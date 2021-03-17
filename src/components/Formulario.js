import React, { useState } from "react";
import Error from "./Error";
import {
  FormularioContainer,
  GroupInput,
  LabelForm,
  InputForm,
  SelectForm,
  Button,
  SelectIcon,
} from "../styles/StyledFormulario";
import PropTypes from "prop-types";

const Formulario = ({
  search,
  setSearch,
  setConsultar,
  setLoading,
  loading,
}) => {
  const [error, setError] = useState(false);

  const { ciudad, pais } = search;

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.trim() === "" || pais.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setConsultar(true);
    setLoading(true);
  };

  return (
    <FormularioContainer onSubmit={handleSubmit}>
      <GroupInput>
        <LabelForm htmlFor="ciudad">Ciudad:</LabelForm>
        <InputForm
          type="text"
          name="ciudad"
          id="ciudad"
          placeholder="Introduzca nombre de ciudad"
          value={ciudad}
          onChange={handleChange}
        />
      </GroupInput>

      <GroupInput>
        <LabelForm htmlFor="pais">País: </LabelForm>
        <SelectForm name="pais" id="pais" value={pais} onChange={handleChange}>
          <option value="">Seleccione un País</option>
          <option value="BO">Bolivia</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </SelectForm>
        <SelectIcon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
          </svg>
        </SelectIcon>
      </GroupInput>

      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}

      <GroupInput>
        <Button type="submit" disabled={loading ? "disabled" : null}>
          Buscar Clima
        </Button>
      </GroupInput>
    </FormularioContainer>
  );
};

Formulario.propTypes = {
  search: PropTypes.object.isRequired,
  setSearch: PropTypes.func.isRequired,
  setConsultar: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Formulario;
