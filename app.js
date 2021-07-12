// Init weahter class
// const ui = new UI();
const weather = new Weather()

const input = document.querySelector('input');
const btn = document.querySelector('#submit').addEventListener('click', (e) => {

    weather.getWeather(input.value)
    .then(res => ui.displayTemp(res))
    .catch(err => ui.displayTemp(err))

    e.preventDefault()
})