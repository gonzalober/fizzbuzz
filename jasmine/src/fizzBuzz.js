function _isDivisibleBy(divisor, number) {
  return number % divisor === 0;
}
function fizzBuzz(nums) {
  if (_isDivisibleBy(15, nums)) {
    return('FizzBuzz');
  }
  else if (_isDivisibleBy(5, nums)) {
    return('Buzz');
  }
  else if (_isDivisibleBy(3, nums)) {
    return('Fizz');
  } else {
    return nums;
  }
}
for (var i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}
