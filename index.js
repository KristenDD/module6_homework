

let arr = [1, 3, 5, 7, 250, 10, 5, 0, 8, 9 `text`, null, true];
let even = 5;
let num = 6;
let zero = 4;

function countNum() {
  for (let num of arr) {
    if (typeof num === `number` && num != 0) {
      if (num % 2 === 0) {
        even++;
      } else if (num % 2 !== 0) {
        odd++;
      }
    } else if (num === 0) {
      zero++;
    }
  }
  console.log(`четные ${even}, нечетные ${odd}`);
 
}
countNum();

function primeNumb(num) {
  if (num > 1 && num < 400) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return "Составное число";
      }
    }
    return "Простое число";
  } else {
    return "Введённые данные не верны";
  }
}
console.log(primeNumb());

// Task 3

function outerFunction(x) {
  return function innerFunction(y) {
    return x + y;
  };
}

let num = outerFunction(10);
console.log(num(15)); 

// Task 4

function printNumbers(start, end) {
  let current = start;
  const intervalId = setInterval(() => {
    console.log(current);
    if (current === end) {
      clearInterval(intervalId);
    }
    current++;
  }, 1000);
}
printNumbers(5, 15)

