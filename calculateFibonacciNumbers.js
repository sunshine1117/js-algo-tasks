const calculateFibonacciNumbers = (num) => {
  if(num <= 1) {
    return num;
  }

  return calculateFibonacciNumbers(num - 1) + calculateFibonacciNumbers(num - 2);
};

console.log(calculateFibonacciNumbers(8));



//calculateFibonacciNumbers(1) == 1;
//calculateFibonacciNumbers(2-1)/1+calculateFibonacciNumbers(2-2)/0 == 1 + 0 == 1
//calculateFibonacciNumbers(2)/1
//calculateFibonacciNumbers(3-1)+calculateFibonacciNumbers(3-2) == 1+1=2
//calculateFibonacciNumbers(3)/2
//calculateFibonacciNumbers(4-1)+calculateFibonacciNumbers(4-2) == 2+1=3;
//calculateFibonacciNumbers(4)//3
//calculateFibonacciNumbers(5-1)+calculateFibonacciNumbers(5-2) == 3 + 2 = 5
//calculateFibonacciNumbers(5)//5
//calculateFibonacciNumbers(6-1)/5+//calculateFibonacciNumbers(6-2) == 5+3 = 8
//calculateFibonacciNumbers(6)/8
//calculateFibonacciNumbers(7 - 1)/6+calculateFibonacciNumbers(7 - 2); == 8 + 5 = 13
//calculateFibonacciNumbers(7) 13
//calculateFibonacciNumbers(8 - 1)/7+calculateFibonacciNumbers(8 - 2); == 13 + 8 = 21
