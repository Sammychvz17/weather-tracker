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

    fetch(apiurl)
        .then(function(response) {
            if (response.ok) {
                //console.log(response);
                response.json().then(function(data) {
                    console.log(data);
                });
            }
        });


};


var displayCityMain = function() {


};






//event listener for Search Btn 
searchBtn.addEventListener("click", citySearch);