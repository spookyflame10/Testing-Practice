import {capitalize, reverseStr, calculator, ceasarCipher, analyzeArray} from './functions.js';

test('returns 1 letter caps', () => {
  expect(capitalize("hello")).toBe("Hello");
});
test('capitalize empty', () => {
  expect(capitalize("")).toBe("");
});

test('reverse a str', () =>{
  expect(reverseStr("hello")).toBe("olleh");
})
test('reverse empty', () =>{
  expect(reverseStr("")).toBe("");
})

test('add 2 nums', () =>{
  expect(calculator.add(3,4)).toBe(7);
})
test('subtract 2 nums', () =>{
  expect(calculator.subtract(3,4)).toBe(-1);
})
test('divide 2 nums', () =>{
  expect(calculator.divide(4,2)).toBe(2);
})
test('multiply 2 nums', () =>{
  expect(calculator.multiply(3,4)).toBe(12);
})

test('z-a, same case, and punctuation', ()=>{
  expect(ceasarCipher('Defend The eAst wall of the castlz', 1)).toBe('Efgfoe Uif fBtu xbmm pg uif dbtuma');
})

test('array to object', ()=>{
  expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
})