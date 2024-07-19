async function showWeather() {
    var loding = document.getElementById('loding')
    loding.style.display = 'flex'

    await fetch('https://api.open-meteo.com/v1/forecast?latitude=33.5883&longitude=-7.6114&current=temperature_2m,wind_speed_10m,relative_humidity_2m,pressure_msl,cloud_cover,precipitation,precipitation_probability,rain,weather_code,is_day&daily=temperature_2m_max,temperature_2m_min,wind_speed_10m_max,rain_sum,precipitation_probability_min,sunrise,sunset,weather_code')
        .then(res => res.json())
        .then(data => {

            console.log( data.daily.weather_code)
            var current_code = data.current.weather_code
            var daily_code = data.daily.weather_code

            function weatherCode(code){
                
                switch (code){
                    case 0:
                        return 'clear_day'
                    case 5:
                        return 'pcloudy'
                    case 45, 48:
                        console.log('Fog and depositing rime fog')
                        break
                    case 51, 53, 55:
                        console.log('Drizzle: Light, moderate, and dense intensity')
                        break
                    case 56, 57:
                        console.log('Freezing Drizzle: Light and dense intensity')
                        break
                    case 61, 63, 65:
                        console.log('	Rain: Slight, moderate and heavy intensity')
                        break
                    case 66, 67:
                        console.log('Freezing Rain: Light and heavy intensity')
                        break
                    case 71, 73, 75:
                        console.log('Snow fall: Slight, moderate, and heavy intensity')
                        break
                    case 77:
                        console.log('Snow grains')
                        break
                    case 80, 81, 82:
                        console.log('Rain showers: Slight, moderate, and violent')
                        break
                    case 85, 86:
                        console.log('Snow showers slight and heavy')
                        break
                }
            }
            weatherCode(current_code)

            var date = new Date(data.current.time);
            var sunrise = new Date(data.daily.sunrise[1]);
            var sunset = new Date(data.daily.sunset[1]);

            document.getElementById('time').innerText = date.toDateString() + ", " + date.getHours() + " : " + date.getMinutes();
            document.getElementById('temperature').innerText = data.current.temperature_2m + " " + data.current_units.temperature_2m;
            document.getElementById('wind').innerText = data.current.wind_speed_10m + " " + data.current_units.wind_speed_10m;
            document.getElementById('humidity').innerText = data.current.relative_humidity_2m + " " + data.current_units.relative_humidity_2m;
            document.getElementById('pressure').innerText = data.current.pressure_msl + " " + data.current_units.pressure_msl;
            document.getElementById('cloud_cover').innerText = data.current.cloud_cover + " " + data.current_units.cloud_cover;
            document.getElementById('precipitation').innerText = data.current.precipitation + " " + data.current_units.precipitation;
            document.getElementById('rain').innerText = data.current.precipitation_probability + " " + data.current_units.precipitation_probability;
            document.getElementById('sunrise').innerText = sunrise.getHours() + " : " + sunrise.getMinutes();
            document.getElementById('sunset').innerText = sunset.getHours() + " : " + sunset.getMinutes();


            /*multi meteo days*/
            const list = [0, 1, 2, 3, 4, 6]

            var time = data.daily.time
            var max_temp = data.daily.temperature_2m_max
            var min_temp = data.daily.temperature_2m_min
            var wind = data.daily.wind_speed_10m_max
            var rain = data.daily.rain_sum
            var precipitation = data.daily.precipitation_probability_min

            var htme = list.map(data => {

                return `<div class="one_day">
                        <p>${time[data]}</p>
        <span class="t_magin">
            <img src="assets/${weatherCode(2)}.png" width="40%">
            <div>
                <span>${max_temp[data]} °C</span>
                <span>${min_temp[data]} °C</span>
            </div>
        </span>
        
        <div>
            <img src="assets/aviable/rainy.png" alt="precipitation">
            <span id="precipitation"> ${precipitation[data]} %</span>
        </div>
        <div>
            <img src="assets/aviable/rainy.png" alt="precipitation">
            <span id="precipitation"> ${rain[data]} mm</span>
        </div>
        <div>
            <img src="assets//aviable/wind.png" alt="wind speed" width="30%">
            <span id="wind">${wind[data]} km/h</span>
        </div>
    </div>`
            })

            var meteo_day = document.getElementById('meteo_day')
            meteo_day.innerHTML += htme.join('')

            loding.style.display = 'none'
        })
        .catch(err => console.log(err), loding.style.display = 'none')
}
showWeather()

