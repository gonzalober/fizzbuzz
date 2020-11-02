describe("fizzBuzz", function() {
  it('if the number is divisible by 3 it returns "Fizz" ', function() {
    expect(fizzBuzz(3)).toEqual('Fizz');
  });
  it('if the number is divisible by 5 it returns "Buzz" ', function() {
    expect(fizzBuzz(5)).toEqual('Buzz');
  });
  it('if the number is divisible by 3 and 5 it returns "FizzBuzz" ', function() {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
  });
});