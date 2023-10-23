function romamNumeralDecoder(roman){
    const romanNumbers = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1
    }
    
    let arrayOfRomans = roman.split('');
    let sum = 0;
    
    for (let i=0; i<array.length; i++){   
      if(romanNumbers[arrayOfRomans[i]] < romanNumbers[arrayOfRomans[i+1]]){        
        sum += (romanNumbers[arrayOfRomans[i+1]] - romanNumbers[arrayOfRomans[i]]);  
        i++;
      }else{
        sum += romanNumbers[arrayOfRomans[i]];                           
      }
    }
    return sum;
  }