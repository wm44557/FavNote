import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import BulbIcon from 'assets/bulb.svg';
import PenIcon from 'assets/pen.svg';
import TwitterIcon from 'assets/twitter.svg';
import LogoutIcon from 'assets/logout.svg';
import LogoIcon from 'assets/logo.svg';
import ButtonIco from '../../atoms/ButtonIcon/ButtonIcon';

import withContext from '../../../hoc/withContext';

const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ theme, activeColor }) => (activeColor ? theme[activeColor] : 'white')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${LogoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledLogoutButton = styled(ButtonIco)`
  margin-top: auto;
`;

const Sidebar = ({ pageContext }) => (
  <StyledWrapper activeColor={pageContext}>
    <StyledLogoLink to="/" />
    <StyledLinkList>
      <li>
        <ButtonIco as={NavLink} to="/notes" activeclass="active" icon={PenIcon} />
      </li>
      <li>
        <ButtonIco as={NavLink} to="/twitters" activeclass="active" icon={TwitterIcon} />
      </li>
      <li>
        <ButtonIco as={NavLink} to="/articles" activeclass="active" icon={BulbIcon} />
      </li>
    </StyledLinkList>
    <StyledLogoutButton><ButtonIco as={NavLink} to="/" icon={LogoutIcon} /></StyledLogoutButton>
  </StyledWrapper>
);

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};
Sidebar.defaultProps = {
  pageContext: 'notes',
};
export default withContext(Sidebar);
