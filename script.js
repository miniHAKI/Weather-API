const ApiKey = "1eafaad80f17077fea9d35036d7b723b";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const btn = document.querySelector(".search button")
const Icon = document.querySelector(".weather-icon")

async function Checkweather(city) {

    const response = await fetch(url + city + `&appid=${ApiKey}`);
    var data = await response.json();
    console.log(data);

    const City = document.querySelector(".city")
    const Temp = document.querySelector(".temp")
    const Humidity = document.querySelector(".humidity")
    const Wind = document.querySelector(".wind")
    City.innerHTML = data.name;
    Temp.innerHTML = Math.round(data.main.temp) + "°c";
    Humidity.innerHTML = data.main.humidity + "%";
    Wind.innerHTML = Math.round(data.wind.speed) + "" + "km/h";

    if (data.weather[0].main == "Clouds") {
        Icon.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Clear"){
        Icon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Drizzle"){
        Icon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist"){
        Icon.src = "images/mist.png"
    }
    else if (data.weather[0].main == "Rain"){
        Icon.src = "images/rain.png"
    }
    else{
        Icon.src = "images/snow.png"
    }
}
btn.addEventListener("click" , ()=>{
    Checkweather(searchBox.value);
} )

console.log('huzaifa');
