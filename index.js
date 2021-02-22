export function pow(base, power) {
  let result = 1;
  while (power > 0) {
    result = base * result;
    power--;
  }
  return result;
}
