import React from 'react';
import styled from 'styled-components';

const FinishesContainer = styled.section`
  padding: 100px 0;
  background-color: white;
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const FinishesImage = styled.div`
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

const FinishesContent = styled.div`
  h3 {
    font-size: 1.8rem;
    color: #2c3e50;
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 60px;
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 30px 20px;
  background: #f8f9fa;
  border-radius: 15px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 1.5rem;
  color: white;
`;

const FeatureTitle = styled.h4`
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  color: #7f8c8d;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const FinishesSection: React.FC = () => {
  const features = [
    {
      icon: '🏗️',
      title: 'Materiales Premium',
      description: 'Utilizamos únicamente materiales de primera calidad de marcas reconocidas y certificadas.'
    },
    {
      icon: '⚡',
      title: 'Eficiencia Energética',
      description: 'Instalaciones y acabados que garantizan el máximo ahorro energético y confort.'
    },
    {
      icon: '🎨',
      title: 'Diseño Personalizado',
      description: 'Cada detalle está pensado para reflejar tu personalidad y estilo de vida.'
    },
    {
      icon: '🛡️',
      title: 'Garantía Total',
      description: 'Todos nuestros acabados cuentan con garantía extendida y servicio post-venta.'
    }
  ];

  return (
    <FinishesContainer id="acabados">
      <Container>
        <SectionTitle>Acabados de Calidad</SectionTitle>
        <SectionSubtitle>
          La excelencia en cada detalle, visible e invisible
        </SectionSubtitle>
        
        <ContentGrid>
          <FinishesImage>
            <span>
              Imagen de acabados<br />
              (Se reemplazará con la foto real)
            </span>
          </FinishesImage>
          
          <FinishesContent>
            <h3>Calidad que se nota</h3>
            <p>
              En TotalHomes no escatimamos en calidad. Utilizamos únicamente materiales 
              de primera calidad y trabajamos con las mejores marcas del mercado para 
              garantizar que tu hogar no solo sea hermoso, sino también duradero y funcional.
            </p>
            <p>
              Desde los cimientos hasta el último detalle decorativo, cada elemento 
              está cuidadosamente seleccionado y colocado por nuestro equipo de 
              profesionales altamente cualificados.
            </p>
            <p>
              Nuestro compromiso con la excelencia se refleja en cada proyecto, 
              garantizando que tu inversión sea una inversión para toda la vida.
            </p>
          </FinishesContent>
        </ContentGrid>
        
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>
                {feature.icon}
              </FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </FinishesContainer>
  );
};

export default FinishesSection;
