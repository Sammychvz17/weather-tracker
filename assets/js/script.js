var cityNameInput = document.querySelector("#city");
var searchBtn = document.querySelector("#searchBtn");
var cityList = document.querySelector("#cityList");
var weatherMain = document.querySelector("#weatherMain");



var citySearch = function() {
    // adding the value to city input to display search 
    var cityName = cityNameInput.value.trim();
    console.log(cityName);
    cityData(cityName);

};

var cityData = function(city) {
    var apiurl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=884be92164305b573914680b6dc3b9be"

    //fetching data from api 
    fetch(apiurl)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    displayCityMain(data.name);

                });
            }
        });


};

//displaying data and targeting data 
var displayCityMain = function(city) {
    
    var cityNameCon = document.createElement("h3");
    cityNameCon.textContent = city;
    weatherMain.appendChild(cityNameCon);

    var cityBtn = document.createElement("button");
    cityBtn.classList = "btn btn-outline-primary my-4 btn-md rounded";
    cityBtn.textContent = city;
    cityList.appendChild(cityBtn);

};






//event listener for Search Btn 
searchBtn.addEventListener("click", citySearch);