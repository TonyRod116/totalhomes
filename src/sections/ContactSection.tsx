import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const ContactContainer = styled.section`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.8rem;
    color: #2c3e50;
    margin-bottom: 30px;
    font-weight: 600;
  }
  
  p {
    color: #7f8c8d;
    line-height: 1.8;
    margin-bottom: 30px;
    font-size: 1.1rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  .icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    font-size: 1.2rem;
    color: white;
  }
  
  .content {
    h4 {
      color: #2c3e50;
      margin-bottom: 5px;
      font-weight: 600;
    }
    
    p {
      color: #7f8c8d;
      margin: 0;
    }
  }
`;

const FormContainer = styled.div`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  
  label {
    color: #2c3e50;
    font-weight: 600;
    margin-bottom: 8px;
  }
  
  input, textarea {
    padding: 15px;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: #2c5aa0;
    }
    
    &.error {
      border-color: #e74c3c;
    }
  }
  
  textarea {
    min-height: 120px;
    resize: vertical;
  }
  
  .error-message {
    color: #e74c3c;
    font-size: 0.9rem;
    margin-top: 5px;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ContactSection: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
    // Simulate form submission
    console.log('Form data:', data);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  };

  return (
    <ContactContainer id="contacto">
      <Container>
        <SectionTitle>Contacto</SectionTitle>
        <SectionSubtitle>
          ¿Listo para hacer realidad tu proyecto? Contáctanos y te asesoraremos sin compromiso
        </SectionSubtitle>
        
        <ContactGrid>
          <ContactInfo>
            <h3>Información de Contacto</h3>
            <p>
              Estamos aquí para ayudarte en cada paso de tu proyecto. 
              No dudes en contactarnos para una consulta gratuita.
            </p>
            
            <ContactItem>
              <div className="icon">📍</div>
              <div className="content">
                <h4>Dirección</h4>
                <p>Calle Principal 123, 28001 Madrid</p>
              </div>
            </ContactItem>
            
            <ContactItem>
              <div className="icon">📞</div>
              <div className="content">
                <h4>Teléfono</h4>
                <p>+34 91 123 45 67</p>
              </div>
            </ContactItem>
            
            <ContactItem>
              <div className="icon">📱</div>
              <div className="content">
                <h4>Móvil</h4>
                <p>+34 600 123 456</p>
              </div>
            </ContactItem>
            
            <ContactItem>
              <div className="icon">✉️</div>
              <div className="content">
                <h4>Email</h4>
                <p>info@totalhomes.es</p>
              </div>
            </ContactItem>
          </ContactInfo>
          
          <FormContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <label htmlFor="name">Nombre *</label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'El nombre es obligatorio' })}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && (
                  <span className="error-message">{String(errors.name.message)}</span>
                )}
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'El email es obligatorio',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido'
                    }
                  })}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && (
                  <span className="error-message">{String(errors.email.message)}</span>
                )}
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="project">Tipo de Proyecto</label>
                <select
                  id="project"
                  {...register('project')}
                  style={{
                    padding: '15px',
                    border: '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="obra-nueva">Obra Nueva</option>
                  <option value="reforma">Reforma Integral</option>
                  <option value="consultoria">Consultoría</option>
                  <option value="otro">Otro</option>
                </select>
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  {...register('message', { required: 'El mensaje es obligatorio' })}
                  className={errors.message ? 'error' : ''}
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
                {errors.message && (
                  <span className="error-message">{String(errors.message.message)}</span>
                )}
              </FormGroup>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </SubmitButton>
            </Form>
          </FormContainer>
        </ContactGrid>
      </Container>
    </ContactContainer>
  );
};

export default ContactSection;
