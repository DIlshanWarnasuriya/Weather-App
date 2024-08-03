
let locationtxt = document.getElementById("txt-location");
let temperature = document.getElementById("temperature");
let Weather = document.getElementById("WeatherName");
let nowLocation = document.getElementById("location");
let wind = document.getElementById("wind");
let image = document.querySelector('.image img');

function find() {


}

$(document).ready(function () {
    $('.search button').click(function () {
        if (locationtxt.value == "") {
            $('.result').slideUp();
        }
        else {

            fetch("https://api.weatherapi.com/v1/current.json?key=e5d078b798b44537bd7155559241404&q=" + locationtxt.value)
                .then(res => res.json())
                .then(data => {

                    if(!data.location){
                        $('.result').slideUp();
                    }
                    else{

                        let roundedNumber = Math.round(data.current.temp_c);
                        
                        temperature.innerHTML = `<b>${roundedNumber}&deg;</b>`;
                        Weather.innerHTML = data.current.condition.text;
                        nowLocation.innerHTML = data.location.name + ", " + data.location.country;
                        wind.innerHTML = "Wind : " + data.current.wind_kph + " kph"
        
                        let icon = data.current.condition.text
                        image.src = 'image/' + icon + '.png';


                        $('.result').slideDown();
                    }

                }
            )
        }

    });
});
