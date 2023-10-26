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
    
    let arrayOfRomans = [...roman];
    let sum = 0;
    
    for (let index=0; index<arrayOfRomans.length; index++){   
      if(romanNumbers[arrayOfRomans[index]] < romanNumbers[arrayOfRomans[index+1]]){        
        sum += (romanNumbers[arrayOfRomans[index+1]] - romanNumbers[arrayOfRomans[index]]);  
        index++;
      }else{
        sum += romanNumbers[arrayOfRomans[index]];                           
      }
    }
    return sum;
  }