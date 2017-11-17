import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renderiza corretamente', () => {
    expect(app).toMatchSnapshot();
  });

  it('inicializa o "estado" com uma lista vazia de presentes', () => {
    expect(app.state().presentes).toEqual([]);
  });

  describe('quando clicar no botão "adicionar"', () => {
    const id = 1;

    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      app.setState({ presentes: [] });
    });

    it('adiciona um novo presente ao "estado"', () => {
      expect(app.state().presentes).toEqual([{ id }]);
    });

    it('adiciona um novo presente na lista de renderização', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('cria uma nova instancia de Presente', () => {
      expect(app.find('Presente').exists()).toEqual(true);
    });

    describe('o usuario decidiu remover um presente adicionado', () => {
      beforeEach(() => {
        app.instance().removePresente(id);
      });

      it('remove o presente do "estado"', () => {
        expect(app.state().presentes).toEqual([]);
      });
    });
  });
});
