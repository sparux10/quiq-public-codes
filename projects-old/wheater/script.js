// script.js
let cityCoordinates = ''; // متغير عالمي لتخزين الإحداثيات

// تعريف الإحداثيات
const coordinates = {
    casablanca: 'latitude=33.5883&longitude=-7.6114',
    tangier: 'latitude=35.7661&longitude=-5.8026',
    marrakech: 'latitude=31.6295&longitude=-7.9811',
    ouarzazate: 'latitude=30.9334&longitude=-6.8937',
    fes: 'latitude=34.0371&longitude=-4.9998',
    meknes: 'latitude=34.2621&longitude=-5.5386',
    rabat: 'latitude=34.0209&longitude=-6.8416',
    oujda: 'latitude=34.6825&longitude=-1.9102',
    agadir: 'latitude=30.4278&longitude=-9.5981'
};

document.addEventListener('DOMContentLoaded', function() {
    const citySelect = document.getElementById('city-select');
    const selectedCoordinates = document.getElementById('city');

    citySelect.addEventListener('change', function() {
        const selectedCity = citySelect.options[citySelect.selectedIndex].text;
        cityCoordinates = coordinates[selectedCity.toLowerCase()]; // تعيين الإحداثيات بناءً على المدينة المحددة
        selectedCoordinates.textContent = selectedCity;

        // استدعاء دالة عرض الطقس مع الإحداثيات المحددة
        showWeather();
    });

    // تعيين قيمة افتراضية عند تحميل الصفحة
    citySelect.dispatchEvent(new Event('change'));
});
async function showWeather() {
    var loding = document.getElementById('loading')
    loding.style.display = 'flex'

    await fetch(`https://api.open-meteo.com/v1/forecast?${cityCoordinates}&current=temperature_2m,wind_speed_10m,relative_humidity_2m,pressure_msl,cloud_cover,precipitation,precipitation_probability,rain,weather_code,is_day&daily=temperature_2m_max,temperature_2m_min,wind_speed_10m_max,rain_sum,precipitation_probability_min,sunrise,sunset,weather_code`)
        .then(res => res.json())
        .then(data => {

            var current_code = data.current.weather_code
            var daily_code = data.daily.weather_code

            function weatherCode(code) {
                switch (code) {
                    case 0:
                    case 1:
                    case 2:
                        return {status:"clear day", iconD:"assets/day/wi-day-sunny.svg", iconN: "assets/night/wi-night-alt-hail"};
                    case 3:
                        return {status:"partly cloudy", iconD:"assets/day/wi-day-cloudy-gusts.svg", iconN:"assets/night/wi-night-cloudy-gusts.svg"};
                    case 45:
                    case 48:
                        return {status:'Fog and depositing rime fog', iconD:"assets/day/wi-day-fog.svg", iconN:"wi-night-fog.svg"};
                    case 51:
                    case 53:
                    case 55:
                        return {status:'Drizzle: Light, moderate, and dense intensity',iconD:"assets/day/wi-day-rain-mix.svg", iconN:"assets/night/wi-night-alt-rain-mix.svg"};
                    case 56:
                    case 57:
                        return {status:'Freezing Drizzle: Light and dense intensity',iconD:"assets/day/wi-day-snow-wind.svg", iconN:"assets/night/wi-night-alt-snow-mix.svg"};
                    case 61:
                    case 63:
                    case 65:
                        return {status:'Rain: Slight, moderate and heavy intensity', iconD:"assets/wi-rain.svg", iconN:"assets/wi-rain.svg"};
                    case 66:
                    case 67:
                        return {status:'Freezing Rain: Light and heavy intensity',iconD:"assets/day/wi-day-snow-wind.svg", iconN:"assets/night/wi-night-alt-snow-wind.svg"};
                    case 71:
                    case 73:
                    case 75:
                        return {status:'Snow fall: Slight, moderate, and heavy intensity',iconD:"assets/day/wi-day-snow-wind.svg", iconN:"assets/night/wi-night-alt-snow-wind.svg"};
                    case 77:
                        return {status:'Snow grains',iconD:"assets/day/wi-snow.svg", iconN:"assets/night/wi-night-alt-snow.svg"};
                    case 80:
                    case 81:
                    case 82:
                        return {status:'Rain showers: Slight, moderate, and violent', iconD:"assets/wi-rain.svg", iconN:"assets/wi-rain.svg"};;
                    case 85:
                    case 86:
                        return {status:'Snow showers: slight and heavy',iconD:"assets/day/wi-day-snow.svg", iconN:"assets/night/wi-night-alt-snow.svg"};
                    case 95:
                    case 96:
                    case 99:
                        return {status:'Thunderstorm: Slight, moderate, and with hail',iconD:"assets/day/wi-day-thunderstorm.svg", iconN:"assets/night/wi-night-alt-rain-mix.svg"};
                    default:
                        return {status:'Unknown weather code',iconD:"",iconN:""};
                }
            }

            var date = new Date(data.current.time);
            var sunrise = new Date(data.daily.sunrise[1]);
            var sunset = new Date(data.daily.sunset[1]);



            const is_day = document.getElementById('dn')
            if(date.getHours()>sunrise.getHours()&&date.getHours()<sunset.getHours()){
                is_day.src = weatherCode(current_code).iconD
            }else{
                is_day.src = weatherCode(current_code).iconN
            } 
            document.getElementById('weathercode').innerText = weatherCode(current_code).status;
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
            
            loding.style.display = 'none'

            /* 
            const list = [0, 1, 2, 3, 4, 6]

            var time = data.daily.time
            var max_temp = data.daily.temperature_2m_max
            var min_temp = data.daily.temperature_2m_min
            var wind = data.daily.wind_speed_10m_max
            var rain = data.daily.rain_sum
            var precipitation = data.daily.precipitation_probability_min

            var htme = list.map(data => {

                return <div class="one_day">
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
    </div>
            })

            var meteo_day = document.getElementById('meteo_day')
            meteo_day.innerHTML += htme.join('')

            loding.style.display = 'none'
        })
        .catch(err => console.log(err), loding.style.display = 'none')
        latitude=33.5883&longitude=-7.6114   على نفس هذا النص اعطيني قيم الطول و العرض لاهم مدن المغرب طنجة مراكش ورزازات فاس مكناس الرباط وجدة اكادير */
})
}