const input = document.querySelector('#secondsInput');
const start = document.querySelector('#start');
const display = document.querySelector('#timerDisplay');
start.addEventListener('click', countDown);
//input.addEventListener('click', resetInput);
let countdown;

function countDown() {
    let time = parseInt(input.value);
    if (isNaN(time) || time <= 0) {
        display.textContent = 'Please enter a correct number';
        return;
    }
    display.textContent = `${time} seconds left`;
    countdown = setInterval(count, 1000);
    function count() {
        time= time-1;
        if (time > 0) {
            display.textContent = `${time} seconds left`;
        } else {
            clearInterval(countdown);
            display.textContent = "Time's up!";
           
            //input.textContent = 'seconds';
        }
    };
};

// function resetInput(){
//     input.textContent = "";
// };
// function inputHandler(event) {
//     event.target.classList.toggle('#secondsInput');
// }