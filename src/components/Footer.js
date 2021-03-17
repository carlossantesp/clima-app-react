import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

const FooterContainer = styled.footer`
  ${tw`flex justify-center items-center p-1 bg-gray-900`}
  p {
    ${tw`text-gray-300 text-center text-xs`}
  }
  a {
    ${tw`no-underline text-gray-200 font-semibold`}
  }
`;

const Footer = ({ autor }) => {
  return (
    <FooterContainer>
      <p>
        Diseñado y Desarrollado por{" "}
        <a href="https://carlos.santillan.dev" target="blank">
          {autor}
        </a>
      </p>
    </FooterContainer>
  );
};

Footer.propTypes = {
  autor: PropTypes.string.isRequired,
};

export default Footer;
