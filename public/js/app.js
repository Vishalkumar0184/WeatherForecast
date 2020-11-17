const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
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

console.log("Button", cityNameButton, cityNameLabel)

cityNameButton.addEventListener("click", () => {
    console.log("cityNameButton clicked")
    cityNameLabel.className = "displayInline";
    cityIdLabel.className = "displayNone";
    cityLatLabel.className = "displayNone";
    cityZipLabel.className = "displayNone";
})
cityIdButton.addEventListener("click", () => {
    console.log("cityIdButton clicked")
    cityNameLabel.className = "displayNone";
    cityIdLabel.className = "displayInline";
    cityLatLabel.className = "displayNone";
    cityZipLabel.className = "displayNone";
})
cityCoordinateButton.addEventListener("click", () => {
    console.log("cityCoordinateButton clicked")
    cityNameLabel.className = "displayNone";
    cityIdLabel.className = "displayNone";
    cityLatLabel.className = "displayInline";
    cityZipLabel.className = "displayNone";
})
cityZipButton.addEventListener("click", () => {
    console.log("cityNameButton clicked")
    cityNameLabel.className = "displayNone";
    cityIdLabel.className = "displayNone";
    cityLatLabel.className = "displayNone";
    cityZipLabel.className = "displayInline";
})



weatherForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const location = search.value
    messageOne.textContent = "Loading..."
    messageTwo.textContent = ""


    fetch("https://weatherapiforecast.herokuapp.com?q=" + location).then((response) => {

        response.json().then((data) => {

            if (data.error) {
                messageOne.textContent = (data.error)
            }
            else {
                console.log("Data sent Sucessfully")
            }
        })

    })

})