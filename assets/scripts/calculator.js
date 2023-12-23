
const display = document.getElementById('display');
const nums = document.querySelectorAll('.number');
const ops = document.querySelectorAll('.operator');
const equals = document.querySelector('.equal');
const decimal = document.querySelector('.decimal');

nums.forEach(num => {
    num.addEventListener('click',addNum);
});
ops.forEach(op => {
    op.addEventListener('click',addOp);
});
equals.addEventListener('click',calculate);

function addNum(event){
    display.value += event.target.value;
}

function addOp(event){
    const lastChar = display.value.charAt(display.value.length - 1);
    if (!isOperator(lastChar)){
        display.value += event.target.value;
    }
}

function isOperator(char){
    return ['+','-','*','/'].includes(char);
}

function calculate(event){
    display.value = eval(display.value);
}