const cityNameHandler = document.querySelector("#cityName");
const cityIdHandler = document.querySelector("#cityId");
const cityLatHandler = document.querySelector("#cityLat");
const cityZipHandler = document.querySelector("#cityZip");

const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")

const cityNameButton = document.querySelector('#cityNameButton')
const cityIdButton = document.querySelector('#cityIdButton')
const cityCoordinateButton = document.querySelector('#cityCoordinateButton')
const cityZipButton = document.querySelector('#cityZipButton')

const cityNameLabel = document.querySelector('#cityName')
const cityIdLabel = document.querySelector('#cityId')
const cityLatLabel = document.querySelector('#cityLat')
const cityLongLabel = document.querySelector('#cityLong')
const cityZipLabel = document.querySelector('#cityZip')

const cityidDatalabel = document.querySelector('#cityidData')
const cityNameDatalabel = document.querySelector('#cityNameData')
const latitudeDatalabel = document.querySelector('#latitudeData')
const longitudeDatalabel = document.querySelector('#longitudeData')
const currentDatalabel = document.querySelector('#currentData')
const minDatalabel = document.querySelector('#minData')
const maxDatalabel = document.querySelector('#maxData')
const pressureDatalabel = document.querySelector('#pressureData')
const humidityDatalabel = document.querySelector('#humidityData')

console.log("Button", cityNameButton, cityNameLabel)

cityNameButton.addEventListener("click", () => {
    console.log("cityNameButton clicked")
    cityNameLabel.className = "displayInline";
    cityIdLabel.className = "displayNone";
    cityLatLabel.className = "displayNone";
    cityZipLabel.className = "displayNone";
    messageTwo.className = "displayNone"
})
cityIdButton.addEventListener("click", () => {
    console.log("cityIdButton clicked")
    cityNameLabel.className = "displayNone";
    cityIdLabel.className = "displayInline";
    cityLatLabel.className = "displayNone";
    cityZipLabel.className = "displayNone";
    messageTwo.className = "displayNone"
})
cityCoordinateButton.addEventListener("click", () => {
    console.log("cityCoordinateButton clicked")
    cityNameLabel.className = "displayNone";
    cityIdLabel.className = "displayNone";
    cityLatLabel.className = "displayInline";
    cityZipLabel.className = "displayNone";
    messageTwo.className = "displayNone"
})
cityZipButton.addEventListener("click", () => {
    console.log("cityNameButton clicked")
    cityNameLabel.className = "displayNone";
    cityIdLabel.className = "displayNone";
    cityLatLabel.className = "displayNone";
    cityZipLabel.className = "displayInline";
    messageTwo.className = "displayNone"
})

console.log("cityNameHandler", cityNameHandler)

cityNameHandler.addEventListener("submit", (e) => {
    e.preventDefault();
    submitHandler(e);
})

cityIdHandler.addEventListener("submit", (e) => {
    e.preventDefault();
    submitHandler(e);
})

cityLatHandler.addEventListener("submit", (e) => {
    e.preventDefault();
    submitHandler(e);
})

cityZipHandler.addEventListener("submit", (e) => {
    e.preventDefault();
    submitHandler(e);
})

function submitHandler(event) {
    console.log("submitHandler called", event.target)
    console.log('target ', event.target)
    let url = '';
    messageOne.textContent = "Loading..."
    if (event.target.q) {
        url = "https://weatherapiforecast.herokuapp.com/v1/user/getWeather?q=" + event.target.q.value;
    } else if (event.target.userId) {
        url = "https://weatherapiforecast.herokuapp.com/v1/user/getWeather?id=" + event.target.userId.value;
    } else if (event.target.zip) {
        url = "https://weatherapiforecast.herokuapp.com/v1/user/getWeather?zip=" + event.target.zip.value;
    } else if (event.target.lat && event.target.lon) {
        url = "https://weatherapiforecast.herokuapp.com/v1/user/getWeather?lat=" + event.target.lat.value + "&lon=" + event.target.lon.value;
    }
    fetch(url).then((response) => {

        response.json().then((data) => {
            console.log('data', data)
            if (data.error) {
                messageOne.textContent = (data.error)
            } else {
                console.log("messageTwo")
                messageTwo.className = "displayInline";
                messageOne.textContent = "";
                cityidDatalabel.innerHTML = data.result.cityId;
                cityNameDatalabel.innerHTML = data.result.cityName
                latitudeDatalabel.innerHTML = data.result.cordinate.latitude;
                longitudeDatalabel.innerHTML = data.result.cordinate.longitude;
                currentDatalabel.innerHTML = data.result.temprature.current;
                minDatalabel.innerHTML = data.result.temprature.minimum;
                maxDatalabel.innerHTML = data.result.temprature.maximum;
                pressureDatalabel.innerHTML = data.result.temprature.pressure;
                humidityDatalabel.innerHTML = data.result.temprature.humidity;
                console.log("Data sent Sucessfully", data.result)
            }
        })

    })
}