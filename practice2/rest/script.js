'use strict';

function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
  }
  
  myFun("один", "два", "три", "четыре", "пять", "шесть");
  
  // Console Output:
  // a, один
  // b, два
  // manyMoreArgs, [три, четыре, пять, шесть]

  function calcOrDouble(number, basis) {
      basis = basis || 2;
      console.log(number * basis);
  }

  calcOrDouble(3);