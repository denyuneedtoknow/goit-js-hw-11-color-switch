const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
const background = document.querySelector('body')
const btnStart = document.querySelector('[data-action="start"]')
const btnStop = document.querySelector('[data-action="stop"]')


background.style.backgroundColor = '#FFFFFF'

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function colorPicker() {
    const color = colors[randomIntegerFromInterval(0, colors.length)];
    return color
}

function colorChanger() {
    background.style.backgroundColor = `${colorPicker()}`
}

function onBtnStartClick() {
    intervalId = setInterval(colorChanger, 1000)
    btnStart.setAttribute("disabled", "disabled");
}

function onBtnStopClick() {
    clearInterval(intervalId)
    btnStart.removeAttribute("disabled", "disabled");
}

btnStart.addEventListener('click', onBtnStartClick)
btnStop.addEventListener('click', onBtnStopClick)