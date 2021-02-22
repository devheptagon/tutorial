export function sumAll(...params) {
  let result = 0;
  for (let i = 0; i < params.length; i++) {
    result += params[i];
  }
  return result;
}

export function reverse(str) {
  let result = "";

  let characters = str.split("");
  for (let i = characters.length - 1; i >= 0; i--) {
    let current = characters[i];
    result += current;
  }
  return result;
}


export function frogJumps(from, to, jumpCapacity){
  if(from <= 0 || to <= 0 ||jumpCapacity <= 0 || 
     from > 1000000000 || to > 1000000000 || jumpCapacity > 1000000000 || 
     to <= from) {
      return -1; 
  }

  let jumpCount = Math.floor((to - from)/jumpCapacity); 
  let modeForJumps = (to - from) % jumpCapacity;
  modeForJumps > 0 ? jumpCount++ : jumpCount;
  return jumpCount;
  
  }

  export function divisibleCount(startRange, endRange, divisibleBy){
      if (startRange < 0 || endRange < 0 || divisibleBy <= 0
          || startRange > 2000000000 || endRange > 2000000000 || divisibleBy > 2000000000
          || startRange >= endRange){
              return -1;
      }

      let divisibleByCount = 0;
      console.log(startRange);
      console.log(endRange);
      for(let i = startRange; i <= endRange; i++){
          i % divisibleBy == 0 ? divisibleByCount++ : divisibleByCount;
      }
      return divisibleByCount;
    }