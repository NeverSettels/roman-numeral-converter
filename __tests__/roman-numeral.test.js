
import { romanize } from './../js/scripts.js';

describe('romanize', () => {
    test('should correctly test that number is less then 4000', () =>{
      expect(romanize('4500')).toEqual('no roman numerals for numbers this big')
    });

    test('Units place for  numbers between 1-9', ()=>{
      expect(romanize('2')).toEqual('II')
    });

});

