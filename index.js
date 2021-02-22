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
