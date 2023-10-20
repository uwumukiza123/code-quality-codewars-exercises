function romamNumeralDecoder(roman){
    let romanNumbers = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1
    }
    
    let array = roman.split('');
    let sum = 0;
    
    for (let i=0; i<array.length; i++){   
      if(romanNumbers[array[i]] < romanNumbers[array[i+1]]){        
        sum += (romanNumbers[array[i+1]] - romanNumbers[array[i]]);  
        i++;
      }else{
        sum += romanNumbers[array[i]];                           
      }
    }
    return sum;
  }