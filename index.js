// defining api constants
const variables = {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': "5190911ba5msh4fbda7c5ffa6b2cp191e64jsn3ceced940a0f",
        'X-RapidAPI-Host': "weather-by-api-ninjas.p.rapidapi.com"
    }
};

// defining default search parameters
let search = document.getElementById('search');
let city = 'Mathura';
getWeather(city);

// defining a function to det the weather of some respective city
function getWeather(city) {

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, variables)
        .then(res => res.json())
        .then((res) => {
            cityName.innerHTML = city;
            
            cloud_pct.innerHTML = 'Cloud Pct = ' + res.cloud_pct;
            
            temp.innerHTML = 'Temperature = ' + res.temp;

            feels_like.innerHTML = 'Feels Like = ' + res.feels_like;

            humidity.innerHTML = 'Humidity = ' + res.humidity;

            min_temp.innerHTML = 'Minimum Temp = ' + res.min_temp;
            
            max_temp.innerHTML = 'Maximum Temp = ' + res.max_temp;
            
            wind_speed.innerHTML = 'Wind Speed = ' + res.wind_speed;
            
            wind_degrees.innerHTML = 'Wind Degrees = ' + res.wind_degrees;
            
            sunrise.innerHTML = 'Sunrise = ' + res.sunrise;
            
            sunset.innerHTML = 'Sunset = ' + res.sunset;

            // for debugging
            // console.log(res);
            // console.log(city);
        })
        .catch(err => console.error(err));

}

// adding an event listner for searching different cities weather with search
submit.addEventListener("click", (e) => {
    
    e.preventDefault();
    
    // handling null field exception
if (search.value == null || search.value == '') {
    alert("Please Enter Some City Name First!");
}

else {
    let name = search.value,
    firstLetter = name.charAt(0);
    
    firstLetter = firstLetter.toUpperCase();
    name = name.slice(1);

    city = firstLetter + name;
    getWeather(city);
    // for debugging purpose
    // console.log(city);
}
});

function dynamicCityData(){
// for adding dynamic other cities to the code
const arr = ['Hathras', 'Agra', 'Mumbai', 'Delhi', 'Pune', 'Gurugram'];

    dynamic_cities.innerHTML = '';

// creating dynamic cities html code bundle
arr.forEach(arrCityName => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + arrCityName, variables)
        .then(res => res.json())
        .then((res) => {
            
            const cityHTML = `<tr>
            <td scope="row" class="text-start">${arrCityName}</td>
            <td>${res.cloud_pct}</td>
            <td>${res.temp}</td>
            <td>${res.feels_like}</td>
            <td>${res.humidity}</td>
            <td>${res.min_temp}</td>
            <td>${res.max_temp}</td>
            <td>${res.wind_speed}</td>
            <td>${res.wind_degrees}</td>
            <td>${res.sunrise}</td>
            <td>${res.sunset}</td> </tr>`;

            // for debugging
            console.log(arrCityName);
            console.log(cityHTML);

            dynamic_cities.innerHTML += cityHTML;
        })
        .catch(err => console.error(err));
        
});
}

// calling the function
dynamicCityData();