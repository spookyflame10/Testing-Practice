function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function reverseStr(str) {
  return str.split("").reduce((acc, cur) => cur + acc, "");
}
const calculator = (() => {
  const add = (x, y) => x + y;
  const subtract = (x, y) => x - y;
  const divide = (x, y) => x / y;
  const multiply = (x, y) => x * y;
  return {
    add,
    subtract,
    divide,
    multiply,
  };
})();
function rotUpper(match, x) {
  const charCode = match.charCodeAt();
  //A = 65, Z = 90
  return String.fromCharCode(
          ((charCode + x) <= 90) ? charCode + x
                                  : (charCode + x) % 90 + 64
         );
}
function rotLower(match, x) {
  const charCode = match.charCodeAt();
  //A = 97, Z = 122
  return String.fromCharCode(
          ((charCode + x) <= 122) ? charCode + x
                                  : (charCode + x) % 122 + 96
         );
}
const ceasarCipher = (str, x) => {
  let result ='';
  for(let i=0; i<str.length; i++){
    if(/[A-Z]/g.test(str.charAt(i))){
      result += rotUpper(str.charAt(i), x);
    }
    else if(/[a-z]/g.test(str.charAt(i))){
      result += rotLower(str.charAt(i),x);
    }
    else{result+= str.charAt(i)};
  }
  return result;
};
function analyzeArray(arr){
  let object = {};
  object.average = arr.reduce((acc, cur)=>acc+cur,0)/arr.length;
  object.min = arr.sort()[0];//by default is min
  object.max = arr.sort((a,b)=> b-a)[0];
  object.length = arr.length;
  return object;
}
export { capitalize, reverseStr, calculator, ceasarCipher, analyzeArray };
