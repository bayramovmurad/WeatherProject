const urls = "https://api.openweathermap.org/data/2.5/"
const key = "9e1b88a9bbd18bf5435cd576e49da39b"


const setValue = (e) => {
    if(e.keyCode == '13')
    getData(searchBar.value)
}

const getData = (cityName) => {
    let setValue = `${urls}weather?q=${cityName}&appid=${key}&units=metric&lang`
    fetch(setValue)
    .then(weather =>{
        return weather.json()
})
.then(showData)
}

const showData = (showing) => {
let city = document.querySelector('.city')
city.innerText = `${showing.name}, ${showing.sys.country} `

let temp = document.querySelector('.temperatur')
    temp.innerText = `${Math.round(showing.main.temp)}°C`

let desc = document.querySelector('.description')
desc.innerText = showing.weather[0].description

let minmax = document.querySelector('.minmax')
minmax.innerText = `${Math.round(showing.main.temp_min)}°c / ${Math.round(showing.main.temp_max)}°c`


}


const searchBar = document.getElementById('SrcP')
searchBar.addEventListener('keypress', setValue)