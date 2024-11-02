console.log('Start');

const inputNameElement = document.querySelector('#user-name');
const buttonElement = document.querySelector('button');
inputNameElement.addEventListener('input', () => {

const userName = inputNameElement.value;
console.log(`Привет, ${userName}`);
})



buttonElement.addEventListener('click', () => {
   conclose.log('click');
})
console.log('start of the cycle');
for (let i = 0; i < 8000000000; i++){}
console.log('end of the cycle');
console.log(`Конец выполнения кода`);