function sandwichCalculator(slicesOfBread){
    let numberOfSandwiches = ~~(slicesOfBread / 2);
    return numberOfSandwiches;

}

console.log(sandwichCalculator(11));

function sandwichCalculator2(slicesOfBread,slicesOfCheese){
    
      if  (sandwichCalculator(slicesOfBread) >= slicesOfCheese){
          return slicesOfCheese;
      }else if(sandwichCalculator(slicesOfBread) < slicesOfCheese){
          return sandwichCalculator(slicesOfBread);
      }

      }
    
     console.log(sandwichCalculator2(6,10));
