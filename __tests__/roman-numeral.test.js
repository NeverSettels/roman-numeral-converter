
import { romanize } from './../js/scripts.js';

describe('romanize', () => {
    test('should correctly test that number is less then 4000', ()=>{
      expect(romanize('4500')).toEqual('no roman numerals for numbers this big')
    });

});