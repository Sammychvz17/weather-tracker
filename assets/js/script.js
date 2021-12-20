var cityNameInput = document.querySelector("#city");
var searchBtn = document.querySelector("#searchBtn");
var cityList = document.querySelector("#cityList");
var weatherMain = document.querySelector("#weatherMain");



var citySearch = function() {
    // adding the value to city input to display search 
    var cityName = cityNameInput.value.trim();
    //console.log(cityName);
    cityData(cityName);

};

var cityData = function(city) {
    var apiurl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=884be92164305b573914680b6dc3b9be"

    //fetching data from api 
    fetch(apiurl)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    displayCityMain(data.name);
                    displayCityCordLat(data.coord.lat);
                    displayCityCordLon(data.coord.lon);
                    displayCityTemp(data.main.temp);
                    displayCityWind(data.wind.speed);
                    displayCityHum(data.main.humidity);
                    //getLatAndLon();
                    

                });
            }
        });


};

//displaying data and targeting data 
var displayCityMain = function(city) {
    
    var cityNameCon = document.createElement("h1");
    cityNameCon.textContent = city;
    weatherMain.appendChild(cityNameCon);

    var cityBtn = document.createElement("button");
    cityBtn.classList = "btn btn-outline-primary my-4 btn-md rounded";
    cityBtn.textContent = city;
    cityList.appendChild(cityBtn);

};



 var displayCityCordLat = function(laCord) {

    console.log(laCord);
    
    


 };

 var displayCityCordLon = function(loCord) {
     console.log(loCord);
     
     

 };

 var getLatAndLon = function() {
    var oneCallWeatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat="+ displayCityCordLat(la) +"&lon="+ displayCityCordLon() +"&units=imperial&appid=884be92164305b573914680b6dc3b9be";
    fetch(oneCallWeatherApi)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    

                });
            }
        });
     
     
 }; 



 
 


 var displayCityTemp = function(city) {

    var title = document.createElement("h4");
    title.textContent = "Temp:";
    title.classList ="col-6";
    weatherMain.appendChild(title);
    
    var cityTemp = document.createElement("p");
    cityTemp.textContent = city;
    cityTemp.classList ="col-6";
    weatherMain.appendChild(cityTemp);

};

var displayCityWind = function(city) {
    
    var title = document.createElement("h4");
    title.textContent = "Wind:";
    title.classList ="";
    weatherMain.appendChild(title);


    var cityWind = document.createElement("p");
    cityWind.textContent = city;
    cityWind.classList ="";
    weatherMain.appendChild(cityWind);

};

var displayCityHum = function(city) {

    var title = document.createElement("h4");
    title.textContent = "Humidity:";
    title.classList ="";
    weatherMain.appendChild(title);
    
    var cityHum = document.createElement("p");
    cityHum.textContent = city;
    cityHum.classList ="";
    weatherMain.appendChild(cityHum);

};


//event listener for Search Btn 
searchBtn.addEventListener("click", citySearch);