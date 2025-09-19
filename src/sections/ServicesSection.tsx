import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  padding: 100px 0;
  background-color: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
  font-weight: 700;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  margin-top: 60px;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 2rem;
  color: white;
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  color: #7f8c8d;
  line-height: 1.6;
  font-size: 1rem;
`;

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: '🏗️',
      title: 'Diseño y asesoramiento personalizado',
      description: 'Creamos diseños únicos adaptados a tus necesidades y estilo de vida, con asesoramiento profesional en cada paso.'
    },
    {
      icon: '🏠',
      title: 'Obras nuevas y reformas integrales',
      description: 'Construimos desde cero o renovamos completamente tu hogar con los más altos estándares de calidad.'
    },
    {
      icon: '⚙️',
      title: 'Gestión total de la construcción',
      description: 'Nos encargamos de todos los aspectos del proyecto, desde la planificación hasta la entrega final.'
    },
    {
      icon: '✅',
      title: 'Garantía de plazos y de calidad',
      description: 'Cumplimos con los tiempos acordados y garantizamos la máxima calidad en todos nuestros trabajos.'
    }
  ];

  return (
    <ServicesContainer id="servicios">
      <Container>
        <SectionTitle>Nuestros Servicios</SectionTitle>
        <SectionSubtitle>
          Ofrecemos soluciones completas para hacer realidad tu hogar ideal
        </SectionSubtitle>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>
                {service.icon}
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesContainer>
  );
};

export default ServicesSection;
