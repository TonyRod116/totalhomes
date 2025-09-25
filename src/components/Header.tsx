import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
  z-index: 1000;
  transition: all 0.3s ease;
  padding: ${props => props.isScrolled ? '10px 0' : '20px 0'};
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #2c5aa0;
  
  span {
    color: #f39c12;
  }
`;

const NavLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  gap: 30px;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background-color: white;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    transition: transform 0.3s ease;
  }
`;

const NavLink = styled.li`
  a {
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
    
    &:hover {
      color: #2c5aa0;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    font-size: 24px;
    color: #333;
  }
`;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Nav>
        <Logo>
          Total<span>Homes</span>
        </Logo>
        
        <NavLinks isOpen={isMobileMenuOpen}>
          <NavLink>
            <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>
              Inicio
            </a>
          </NavLink>
          <NavLink>
            <a href="#sobre-nosotros" onClick={(e) => { e.preventDefault(); scrollToSection('sobre-nosotros'); }}>
              Sobre Nosotros
            </a>
          </NavLink>
          <NavLink>
            <a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('servicios'); }}>
              Servicios
            </a>
          </NavLink>
          <NavLink>
            <a href="#proyectos" onClick={(e) => { e.preventDefault(); scrollToSection('proyectos'); }}>
              Proyectos
            </a>
          </NavLink>
          <NavLink>
            <a href="#acabados" onClick={(e) => { e.preventDefault(); scrollToSection('acabados'); }}>
              Acabados
            </a>
          </NavLink>
          <NavLink>
            <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>
              Contacto
            </a>
          </NavLink>
        </NavLinks>
        
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
