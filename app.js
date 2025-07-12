/*-------------------------------- Constants --------------------------------*/

const calculator = document.querySelector('#calculator');

const display = document.querySelector('.display');

 

/*-------------------------------- Variables --------------------------------*/

let firstNum = '';
let secondNum = '';
let operator = '';
let isSecond = false;


/*------------------------ Cached Element References ------------------------*/


/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click', (event) => {

const value = event.target.innerText;

  console.log(event.target.innerText);



if (event.target.classList.contains('number')) {

console.log('value');

if (!isSecond){

    firstNum += value;
    display.innerText = firstNum;
}

else{

    secondNum += value;
    display.innerText = secondNum;
}

return;

}


  if (event.target.classList.contains('operator') && value !== 'c'){

    if(firstNum !== ''){
        operator= value;
        isSecond = true;
    }

    return;
  }


  if (event.target.classList.contains('equals')){

    if (firstNum && secondNum && operator) {

        const result= calculate(Number(firstNum), Number(secondNum), operator)

        display.innerText = result;
        firstNum = result.toString();
        secondNum ='';
        operator = '';
        isSecond =false;
    }

    return;
  }

  if (value === 'C')
{
    clearCalculator()
}
});

/*-------------------------------- Functions --------------------------------*/

function calculate(num1, num2, operator) {

  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
      case '/':
      return num2 !== 0 ?
      num1 / num2 : 'Error';
  }
}

function clearCalculator() {

  firstNum = '';
  secondNum = '';
  operator = '';
  isSecond = false;
  display.innerText = '0';
}

function updateDisplay(value) {
  display.innerText = value;
}

function handleDecimal() {

  if (!isSecond) {

    if (!firstNum.includes('.')) {
      firstNum += '.';
      display.innerText = firstNum;
    }


  } else {

    if (!secondNum.includes('.')) {
      secondNum += '.';
      display.innerText = secondNum;
    }
  }
}


function handleBackspace() {

  if (!isSecond) {
    firstNum = firstNum.slice(0, -1);
    display.innerText = firstNum || '0';
  } 
  
  else {

    secondNum = secondNum.slice(0, -1);
    display.innerText = secondNum || '0';
  }
}
