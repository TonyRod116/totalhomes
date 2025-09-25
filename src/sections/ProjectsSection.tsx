import React, { useState } from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
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

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 50px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 12px 25px;
  border: 2px solid ${props => props.active ? '#2c5aa0' : '#e9ecef'};
  background-color: ${props => props.active ? '#2c5aa0' : 'white'};
  color: ${props => props.active ? 'white' : '#2c3e50'};
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #2c5aa0;
    background-color: ${props => props.active ? '#1e3d6f' : '#f8f9fa'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  height: 250px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.1rem;
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
    text-align: center;
  }
`;

const ProjectInfo = styled.div`
  padding: 25px;
  
  h3 {
    font-size: 1.3rem;
    color: #2c3e50;
    margin-bottom: 10px;
    font-weight: 600;
  }
  
  p {
    color: #7f8c8d;
    line-height: 1.6;
    margin-bottom: 15px;
  }
`;

const ProjectDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #95a5a6;
  
  span {
    display: flex;
    align-items: center;
    
    &::before {
      content: '🏠';
      margin-right: 5px;
    }
  }
`;

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const projects = [
    {
      id: 1,
      title: 'Casa Moderna Minimalista',
      description: 'Vivienda unifamiliar de diseño contemporáneo con grandes ventanales y acabados de lujo.',
      category: 'obra-nueva',
      rooms: '4 habitaciones',
      area: '180 m²'
    },
    {
      id: 2,
      title: 'Reforma Integral Apartamento',
      description: 'Renovación completa de un apartamento en el centro de Madrid con distribución abierta.',
      category: 'reforma',
      rooms: '3 habitaciones',
      area: '95 m²'
    },
    {
      id: 3,
      title: 'Chalet Tradicional Renovado',
      description: 'Rehabilitación de chalet clásico manteniendo su carácter original con mejoras modernas.',
      category: 'reforma',
      rooms: '5 habitaciones',
      area: '220 m²'
    },
    {
      id: 4,
      title: 'Casa Ecológica Sostenible',
      description: 'Construcción de vivienda bioclimática con materiales sostenibles y alta eficiencia energética.',
      category: 'obra-nueva',
      rooms: '3 habitaciones',
      area: '150 m²'
    },
    {
      id: 5,
      title: 'Loft Industrial Convertido',
      description: 'Transformación de nave industrial en loft moderno con diseño vanguardista.',
      category: 'reforma',
      rooms: '2 habitaciones',
      area: '120 m²'
    },
    {
      id: 6,
      title: 'Villa de Lujo Mediterránea',
      description: 'Casa de lujo con piscina, jardín privado y vistas al mar en la Costa del Sol.',
      category: 'obra-nueva',
      rooms: '6 habitaciones',
      area: '350 m²'
    }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <ProjectsContainer id="proyectos">
      <Container>
        <SectionTitle>Nuestros Proyectos</SectionTitle>
        <SectionSubtitle>
          Descubre algunos de nuestros trabajos más destacados
        </SectionSubtitle>
        
        <FilterButtons>
          <FilterButton 
            active={activeFilter === 'todos'} 
            onClick={() => setActiveFilter('todos')}
          >
            Todos
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'obra-nueva'} 
            onClick={() => setActiveFilter('obra-nueva')}
          >
            Obra Nueva
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'reforma'} 
            onClick={() => setActiveFilter('reforma')}
          >
            Reformas
          </FilterButton>
        </FilterButtons>
        
        <ProjectsGrid>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectImage>
                <span>
                  Imagen del proyecto<br />
                  {project.title}
                </span>
              </ProjectImage>
              <ProjectInfo>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ProjectDetails>
                  <span>{project.rooms}</span>
                  <span>{project.area}</span>
                </ProjectDetails>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
