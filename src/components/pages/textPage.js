import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#0056b3',
    textPrimary: '#333',
    textSecondary: '#666',
    textLight: '#999',
    background: '#f5f5f5',
    white: '#fff',
  },
  fonts: {
    main: "'Roboto', sans-serif",
  },
  sizes: {
    h1: '3rem',
    h2: '2.5rem',
    h3: '2rem',
    p: '1.2rem',
  },
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: ${(props) => props.theme.fonts.main};
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: ${(props) => props.theme.sizes.h1};
    font-weight: bold;
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;

const HeroSection = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  padding: 4rem 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;

  h2 {
    font-size: ${(props) => props.theme.sizes.h2};
    font-weight: bold;
    color: ${(props) => props.theme.colors.textPrimary};
    margin-bottom: 1.5rem;
  }

  p {
    font-size: ${(props) => props.theme.sizes.p};
    color: ${(props) => props.theme.colors.textSecondary};
    margin-bottom: 2rem;
  }

  a.cta {
    display: inline-block;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    padding: 1rem 2rem;
    border-radius: 4px;
    font-size: ${(props) => props.theme.sizes.p};
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

const InfoSection = styled.section`
  margin-bottom: 3rem;

  h2 {
    font-size: ${(props) => props.theme.sizes.h3};
    font-weight: bold;
    color: ${(props) => props.theme.colors.textPrimary};
    margin-bottom: 1.5rem;
  }

  p {
    font-size: ${(props) => props.theme.sizes.p};
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textLight};
  padding-top: 2rem;
`;

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <h1>Определитель языка текста</h1>
        </Header>

        <main>
          <HeroSection>
            <h2>Определите язык вашего текста</h2>
            <p>
              Наш инструмент позволяет быстро и точно определить язык любого
              текста. Просто введите свой текст и нажмите "Определить язык".
            </p>
            <a href="/search" className="cta">
              Определить язык
            </a>
          </HeroSection>

          <InfoSection>
            <h2>Как это работает</h2>
            <p>
              Наш определитель языка использует продвинутые алгоритмы машинного
              обучения, чтобы анализировать синтаксис, словарный запас и другие
              особенности текста и определять его язык с высокой точностью.
            </p>
          </InfoSection>

          <InfoSection>
            <h2>Почему это важно?</h2>
            <p>
              Определение языка текста важно для многих задач, таких как перевод,
              анализ данных, управление контентом и многое другое. Наш инструмент
              поможет вам экономить время и деньги, предоставляя точную
              информацию о языке вашего текста.
            </p>
          </InfoSection>
        </main>

        <Footer>
          <p>&copy; 2024 Определитель языка текста. Все права защищены.</p>
        </Footer>
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
