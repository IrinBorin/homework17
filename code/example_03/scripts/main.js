const divElement = document.querySelector('#int');
let i = 0;
console.log('Start');

const intervalId = setInterval(
  () => {
    console.log(new Date());
  },
  2000
);

setTimeout(() => {
  clearInterval(intervalId);
}, 10000);

setInterval(
    () => {
      divElement.textContent = i;
      i++;
    },
    1000
  );
  setTimeout(() => {
    clearInterval(intervalId);
  }, 1000);