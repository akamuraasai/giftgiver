import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('renderiza corretamente', () => {
  expect(app).toMatchSnapshot();
});

it('inicializa o "estado" com uma lista vazia de presentes', () => {
  expect(app.state().presentes).toEqual([]);
});

it('adiciona um novo presente ao "estado", quando clicar em "adicionar presente"', () => {
  expect();
});