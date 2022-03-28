function convertToRoman(num) {
    const romans = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }
   
    const romansArr = [];
   
    for (let i in romans){
      const currentLetter = Object.keys(romans).find(numeral => romans[numeral] === romans[i]);
      while(num >= romans[i]){
        if (num >= romans[i]){
          romansArr.push(currentLetter);
          num -= romans[i];
        }
      }
    }
   
    return romansArr.join('');
    
   }
   
   convertToRoman(3999);