// Task 1

let arr = [1, 3, 5, 7, 0, 10, 12, 0, 8, `text`, null, true];
let even = 0;
let odd = 0;
let zero = 0;

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
  console.log(`нули ${zero}`);
}
countNum();

// Task 2

function primeNumb(num) {
  if (num > 1 && num < 1000) {
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

