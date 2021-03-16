import React from "react";
import PropTypes from "prop-types";
import {
  HeaderBrand,
  HeaderContainer,
  HeaderLink,
  HeaderLogo,
} from "../styles/StyledHeader";
import LogoApp from "../assets/logo.png";

const Header = ({ titulo }) => {
  return (
    <HeaderContainer>
      <HeaderBrand>
        <HeaderLogo>
          <img src={LogoApp} alt="Clima app Logo" />
        </HeaderLogo>
        <HeaderLink href="/">{titulo}</HeaderLink>
      </HeaderBrand>
    </HeaderContainer>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default Header;
