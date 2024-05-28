import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Roboto', sans-serif;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: #333;
  }
`;

const HeroSection = styled.section`
  background-color: #f5f5f5;
  padding: 4rem 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
  }

  a.cta {
    display: inline-block;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    padding: 1rem 2rem;
    border-radius: 4px;
    font-size: 1.2rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const InfoSection = styled.section`
  margin-bottom: 3rem;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    color: #666;
  }
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 1rem;
  color: #999;
  padding-top: 2rem;
`;

const HomePage = () => {
  return (
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
        <p>&copy; 2023 Определитель языка текста. Все права защищены.</p>
      </Footer>
    </Container>
  );
};

export default HomePage;