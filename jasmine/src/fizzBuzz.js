var nums = [...Array(101).keys()];

function fizzBuzz(nums) {
  if (nums % 3 === 0 && nums % 5 === 0) {
  return('FizzBuzz');
  }
  else if (nums % 5 === 0) {
    return('Buzz');
  }
  else if (nums % 3 === 0) {
    return('Fizz');
  }

}