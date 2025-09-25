import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 100px 0;
  background-color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const AboutContent = styled.div`
  h2 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 25px;
    font-weight: 700;
  }
  
  h3 {
    font-size: 1.5rem;
    color: #f39c12;
    margin-bottom: 20px;
    font-weight: 600;
  }
  
  p {
    color: #7f8c8d;
    line-height: 1.8;
    margin-bottom: 20px;
    font-size: 1.1rem;
  }
`;

const AboutImage = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  height: 400px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><polygon fill="rgba(255,255,255,0.1)" points="0,0 1000,1000 0,1000"/></svg>');
    background-size: cover;
  }
  
  span {
    position: relative;
    z-index: 2;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin-top: 30px;
  
  li {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    color: #2c3e50;
    font-weight: 500;
    
    &::before {
      content: '✓';
      color: #27ae60;
      font-weight: bold;
      margin-right: 15px;
      font-size: 1.2rem;
    }
  }
`;

const AboutSection: React.FC = () => {
  return (
    <AboutContainer id="sobre-nosotros">
      <Container>
        <AboutContent>
          <h2>Sobre Nosotros</h2>
          <h3>Tu hogar, nuestra pasión</h3>
          <p>
            En TotalHomes creemos que construir o reformar tu hogar debe ser una experiencia 
            emocionante y transparente. Nuestro equipo de profesionales altamente cualificados 
            te acompañará en cada paso del proceso, desde el diseño inicial hasta la entrega 
            de llaves.
          </p>
          <p>
            Con años de experiencia en el sector, hemos desarrollado un enfoque único que 
            combina la más alta calidad en materiales y acabados con una gestión eficiente 
            y transparente de cada proyecto.
          </p>
          <p>
            Nuestro compromiso con la excelencia se refleja en cada proyecto, 
            garantizando que tu inversión sea una inversión para toda la vida.
          </p>
          
          <FeaturesList>
            <li>Más de 10 años de experiencia en construcción</li>
            <li>Equipo de arquitectos e ingenieros especializados</li>
            <li>Materiales de primera calidad y marcas reconocidas</li>
            <li>Garantía total en todos nuestros trabajos</li>
            <li>Proceso transparente y comunicación constante</li>
            <li>Compromiso con los plazos de entrega</li>
          </FeaturesList>
        </AboutContent>
        
        <AboutImage>
          <span>
            Imagen de la empresa<br />
            (Se reemplazará con la foto real)
          </span>
        </AboutImage>
      </Container>
    </AboutContainer>
  );
};

export default AboutSection;
