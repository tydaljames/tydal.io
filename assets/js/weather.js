var string = "";

function getWeather(){
    clearBox();
    let zip = document.getElementById("zip").value;

    fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&units=imperial&APPID=6692a76e49a710aba20580d954009f87')
    .then(response => response.json())
    .then(data => string = (JSON.stringify(data)))
    .then(chop => chopString(zip, string));
}

function chopString(zip, string){
    let city = string.substring(string.indexOf("name") + 7, string.indexOf('\",\"cod'))
    let temp = parseFloat(string.substring(string.indexOf("temp") + 6, string.indexOf("feels")));
    let temp_min = parseFloat(string.substring(string.indexOf("temp_min") + 10, string.indexOf("temp_max")));
    let temp_max = parseFloat(string.substring(string.indexOf("temp_max") + 10, string.indexOf("pressure")));
    let feels_like = parseFloat(string.substring(string.indexOf("feels_like") + 12, string.indexOf("temp_min")));
    let description = string.substring(string.indexOf("description") + 14, string.indexOf('\",\"icon'))


    if(isNaN(temp) == false){
        // document.getElementById("result").innerHTML += city + ": " + temp + " ºF,  " + min + "\n";
        // document.getElementById("result").innerHTML = string;   


        document.getElementById("result").innerHTML += 
        city + ":\n" + 
        "temp: " + temp + " ºF\n" + 
        "min: " + temp_min + " ºF\n" +
        "max: " + temp_max + " ºF\n" +
        "feels like: " + feels_like + " º F\n" + 
        "description: " + description + "\n";
    }
    else{
        alert(zip + " is not a valid zip code.")
    }

}

function clearBox(){
    document.getElementById("result").innerHTML = "";
}