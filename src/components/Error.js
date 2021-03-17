import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

const ErrorDanger = styled.p`
  ${tw`bg-red-300 text-red-700 font-semibold w-full p-4 text-center text-sm shadow-md`}
`;

const Error = ({ mensaje }) => {
  return <ErrorDanger>{mensaje}</ErrorDanger>;
};

Error.propTypes = {
  mensaje: PropTypes.string.isRequired,
};

export default Error;
