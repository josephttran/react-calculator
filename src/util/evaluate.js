/* evaluate infix expression */

function precedence(op) {
  if (op === '+' || op === '-') return 1;
  if (op === '*' || op === '/') return 2;

  return 0;
}

function applyOp(op1, op, op2) {
  let operand1 = op1 * 1;
  let operand2 = op2 * 1;

  switch(op) {
    case '+': return operand1 + operand2;
    case '-': return operand1 - operand2;
    case '*': return operand1 * operand2;
    case '/': return operand1 / operand2;

    default: return;
  }
}

function evaluate(express) {
    let op = '';
    let op1 = 0;
    let op2 = 0;
    let numStack = [];
    let opStack = [];
    let opRegex = /([+\-*/])/;
    let expression = express.split(opRegex); 

    expression.forEach(function(elem){
      if (elem !== '*' && elem !== '/' && elem !== '+' && elem !== '-') {
        numStack.push(elem);
      } else {
        while (precedence(opStack[opStack.length-1]) >= precedence(elem)) {
          op = opStack.pop();
          op2 = numStack.pop();
          op1 = numStack.pop();
          numStack.push(applyOp(op1, op, op2));
        }
        if (precedence(opStack[opStack.length-1]) < precedence(elem)) {
          opStack.push(elem);
        }        
      }
    })
  
    while(opStack && opStack.length) {
      op = opStack.pop();
      op2 = numStack.pop();
      op1 = numStack.pop();
      numStack.push(applyOp(op1, op, op2));      
    }

    return numStack;
}

export default evaluate;