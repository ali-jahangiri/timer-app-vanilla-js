const btn = document.querySelector('button');
const input = document.querySelector('input');
const container = document.querySelector('.col-md-6');
const mainRow = document.querySelector('#mainRow');
const time = document.querySelector('#time');
let now = new Date().getTime();
let calenderValue;
let wasEmpty = null;
let wasInvalid = null;
let inputData;
const spanMaket = (text, appen) => {
    const span = document.createElement('span');
    span.textContent = text;
    span.classList.add('alert-value');
    appen.appendChild(span);
    setTimeout(() => {
        span.remove();
    }, 5000)
}
btn.addEventListener('click', () => {
    console.log('clicked');
    inputData = new Date(input.value).getTime();
    if (input.value === '') {
        if (container.lastElementChild.tagName === "BUTTON") {
            spanMaket('Plese Pick a Date', container);
        }
    } else if (inputData < now) {
        if (container.lastElementChild.tagName === "BUTTON") {
            spanMaket('Plese Select a Valid Date', container);
        }
    } else {

        setInterval(() => {
            aaa = new Date(input.value)
            if (!time.value) {
                aaa.setHours(00, 00, 00, 00);
            } else {
                let timeSelected = time.value;
                aaa.setHours(parseInt(timeSelected.substr(0, 2)), parseInt(timeSelected.substr(3, 5)), 00, 00)
            }
            let total = (aaa - new Date().getTime()) / 1000;
            let secondes = Math.floor(total % 60);
            let minutes = Math.floor(total / 60) % 60;
            let hours = Math.floor(total / 3600) % 24;
            let days = Math.floor(total / 3600 / 24);
            let week = Math.floor(days / 7);
            const isLessThen10 = (time) => {
                return time < 10 ? `0${time}` : time;
            }
            secondes === 0 ? console.log('zero') : null;
            mainRow.innerHTML = `
            <div class="col-md-9 m-auto">
            <div id="resultTime" class="row">
            <div class="col-md-2"><span class="lables">Week</span><span class="results">${week}</span></div>
            <div class="col-md-2"><span class="lables">Day</span><span class="results">${days}</span></div>
            <div class="col-md-2"><span class="lables">Hours</span><span class="results">${hours}</span></div>
            <div class="col-md-2"><span class="lables">Minutes</span><span class="results">${minutes}</span></div>
            <div class="col-md-2"><span class="lables">Secends</span><span class="results">${isLessThen10(secondes)}</span></div>
          </div>
            </div>`
        }, 1000)
    }

});