
let locationtxt = document.getElementById("txt-location");
let temperature = document.getElementById("temperature");
let Weather = document.getElementById("WeatherName");
let image = document.querySelector('.result-image img');

function find() {

    fetch("https://api.weatherapi.com/v1/current.json?key=e5d078b798b44537bd7155559241404&q=" + locationtxt.value)
        .then(res => res.json())
        .then(data => {
            temperature.innerHTML = `<b>${data.current.temp_c}&deg;C</b>`;
            Weather.innerHTML = data.current.condition.text;

            let icon = data.current.condition.text
            image.src = 'image/' + icon + '.png';

            results.style = "visibility: visible; transition: transform 3s ease;";
        })
}

