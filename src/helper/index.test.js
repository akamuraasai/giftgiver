import { max_number } from './index';

describe('max_number', () => {
  describe('dado um array vazio', () => {
    it('retorna zero', () => {
      expect(max_number([])).toEqual(0);
    });
  });

  describe('dado um array de numeros', () => {
    it('retorna o maior valor', () => {
      expect(max_number([1, 2, 3])).toEqual(3);
    })
  });
});