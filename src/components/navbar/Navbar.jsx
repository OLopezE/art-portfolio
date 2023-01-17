import React from 'react'
import { useNavigate } from 'react-router-dom'

import { NavContainer, NavOption, NavOptions } from './Navbar.style';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = path => {
    navigate(path);
  }

  return (
    <NavContainer>
      <NavOptions>
        <NavOption onClick={() => handleNavigate('/')}>Home</NavOption>
        <NavOption onClick={() => handleNavigate('/work')}>Work</NavOption>
        <NavOption onClick={() => handleNavigate('/exhibitions')}>Exhibitions</NavOption>
        <NavOption onClick={() => handleNavigate('/about-me')}>About me</NavOption>
        <NavOption onClick={() => handleNavigate('/contact')}>Contact</NavOption>
      </NavOptions>
    </NavContainer>
  )
};

export default Navbar;