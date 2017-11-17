import React from 'react';
import { shallow } from 'enzyme';
import Presente from './Presente';

describe('Presente', () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { presente: { id }, removePresente: mockRemove };
  const presente = shallow(<Presente { ...props } />);

  it('renderiza corretamente', () => {
    expect(presente).toMatchSnapshot();
  });

  it('inicializa a pessoa e o presente no "estado"', () => {
    expect(presente.state()).toEqual({ pessoa: '', objeto: '' });
  });

  describe('quando digitar no input "pessoa"', () => {
    const pessoa = 'John';

    beforeEach(() => {
      presente.find('.input-person').simulate('change', { target: { value: pessoa } });
    });

    it('atualiza a pessoa no "estado"', () => {
      expect(presente.state().pessoa).toEqual(pessoa);
    });
  });

  describe('quando digitar no input "object"', () => {
    const objeto = 'Carro';

    beforeEach(() => {
      presente.find('.input-present').simulate('change', { target: { value: objeto } });
    });

    it('atualiza o objeto no "estado"', () => {
      expect(presente.state().objeto).toEqual(objeto);
    });
  });

  describe('quando clicar no botão "Remover"', () => {
    beforeEach(() => {
      presente.find('.btn-remove').simulate('click');
    });

    it('chama a função "removePresente"', () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
