import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { api } from "../config/api";
import IconoThermometer from "../assets/thermometer.svg";
import IconoHumidity from "../assets/humidity.svg";
import IconoPressure from "../assets/pressure.svg";
import IconoWind from "../assets/wind.svg";
import {
  SectionWrapper,
  ImageIcono,
  ArticleCard,
  TitleCard,
  NumberCard,
  InfoCard,
  DesCard,
} from "../styles/StyledClima";

const Clima = ({ resultado }) => {
  const { name, main, weather, sys, wind } = resultado;
  if (!name) return null;

  return (
    <Fragment>
      <SectionWrapper>
        <ArticleCard isPrimary>
          <TitleCard>
            {name}, <span>{sys.country}</span>
          </TitleCard>
          <img
            className="center"
            src={`${api.imageURL}/${weather[0].icon}@4x.png`}
            alt="Icono"
          />
          <NumberCard>
            {main.temp} <span>&#x2103;</span>
          </NumberCard>
          <DesCard>{weather[0].description}</DesCard>
        </ArticleCard>
        <ArticleCard>
          <ImageIcono src={IconoThermometer} alt="Icono Temperatura minima" />
          <InfoCard>
            {main.temp_min}
            <span>&#x2103;</span>
          </InfoCard>
          <DesCard>Min.</DesCard>
        </ArticleCard>
        <ArticleCard>
          <ImageIcono src={IconoThermometer} alt="Icono Temperatura máxima" />
          <InfoCard>
            {main.temp_max}
            <span>&#x2103;</span>
          </InfoCard>
          <DesCard>Máx.</DesCard>
        </ArticleCard>
      </SectionWrapper>
      <SectionWrapper isSecondary>
        <ArticleCard>
          <ImageIcono src={IconoHumidity} alt="Icono humedad" />
          <InfoCard>{main.humidity}</InfoCard>
          <DesCard>Humedad</DesCard>
        </ArticleCard>
        <ArticleCard>
          <ImageIcono src={IconoPressure} alt="Icono Presion" />
          <InfoCard>{main.pressure}</InfoCard>
          <DesCard>Presión</DesCard>
        </ArticleCard>
        <ArticleCard>
          <ImageIcono src={IconoWind} alt="Icono Nivel del mar" />
          <InfoCard>{wind.speed}</InfoCard>
          <DesCard>Vel. Viento</DesCard>
        </ArticleCard>
      </SectionWrapper>
    </Fragment>
  );
};

Clima.propTypes = {
  resultado: PropTypes.object.isRequired,
};

export default Clima;
