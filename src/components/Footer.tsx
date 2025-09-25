import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: white;
  padding: 60px 0 20px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
`;

const FooterSection = styled.div`
  h3 {
    color: #f39c12;
    margin-bottom: 20px;
    font-size: 20px;
  }
  
  p, li {
    margin-bottom: 10px;
    line-height: 1.6;
  }
  
  ul {
    list-style: none;
  }
  
  a {
    color: #bdc3c7;
    transition: color 0.3s ease;
    
    &:hover {
      color: #f39c12;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  
  svg {
    margin-right: 10px;
    color: #f39c12;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  
  a {
    display: inline-block;
    width: 40px;
    height: 40px;
    background-color: #34495e;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #f39c12;
      transform: translateY(-2px);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #34495e;
  padding-top: 20px;
  text-align: center;
  color: #bdc3c7;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>TotalHomes</h3>
          <p>
            Especialistas en construcción y reformas de viviendas de alta calidad. 
            Construimos el hogar que siempre has imaginado con transparencia y garantía.
          </p>
          <SocialLinks>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">📘</a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">📷</a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">💼</a>
            <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">📺</a>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Servicios</h3>
          <ul>
            <li><a href="#servicios">Obra Nueva</a></li>
            <li><a href="#servicios">Reformas Integrales</a></li>
            <li><a href="#servicios">Diseño Personalizado</a></li>
            <li><a href="#servicios">Gestión de Construcción</a></li>
            <li><a href="#acabados">Acabados de Calidad</a></li>
          </ul>
        </FooterSection>
        
        <FooterSection>
          <h3>Contacto</h3>
          <ContactInfo>
            <span>📍</span>
            <span>Calle Principal 123, 28001 Madrid</span>
          </ContactInfo>
          <ContactInfo>
            <span>📞</span>
            <span>+34 91 123 45 67</span>
          </ContactInfo>
          <ContactInfo>
            <span>📱</span>
            <span>+34 600 123 456</span>
          </ContactInfo>
          <ContactInfo>
            <span>✉️</span>
            <span>info@totalhomes.es</span>
          </ContactInfo>
        </FooterSection>
        
        <FooterSection>
          <h3>Horarios</h3>
          <p><strong>Lunes - Viernes:</strong><br />9:00 - 18:00</p>
          <p><strong>Sábados:</strong><br />10:00 - 14:00</p>
          <p><strong>Domingos:</strong><br />Cerrado</p>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <p>&copy; 2024 TotalHomes. Todos los derechos reservados.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
