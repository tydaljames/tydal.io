var string = "";

function getWeather(){
    clearBox();
    // let zip = document.getElementById("zip").value;
    let startCity = document.getElementById("startCity").value;
    let endCity = document.getElementById("endCity").value;

    // fetch('https://sfya6ero9d.execute-api.us-east-2.amazonaws.com/test/roadtrippath' + zip + ',us&units=imperial&APPID=6692a76e49a710aba20580d954009f87')
    fetch('https://c062ryv3xe.execute-api.us-east-2.amazonaws.com/test/hellojava?startCity=' + startCity + '&endCity=' + endCity)
    .then(response => response.json())
    .then(data => string = (JSON.stringify(data)))
    .then(chop => chopString(startCity, endCity, string));
}

function chopString(startCity, endCity, string){
    // let city = string.substring(string.indexOf("name") + 7, string.indexOf('\",\"cod'))
    // let temp = parseFloat(string.substring(string.indexOf("temp") + 6, string.indexOf("feels")));
    // let temp_min = parseFloat(string.substring(string.indexOf("temp_min") + 10, string.indexOf("temp_max")));
    // let temp_max = parseFloat(string.substring(string.indexOf("temp_max") + 10, string.indexOf("pressure")));
    // let feels_like = parseFloat(string.substring(string.indexOf("feels_like") + 12, string.indexOf("temp_min")));
    // let description = string.substring(string.indexOf("description") + 14, string.indexOf('\",\"icon'))

    document.getElementById("result").innerHTML +=
    string;


    // if(isNaN(temp) == false){
    //     // document.getElementById("result").innerHTML += city + ": " + temp + " ºF,  " + min + "\n";
    //     // document.getElementById("result").innerHTML = string;
    //
    //
    //     document.getElementById("result").innerHTML +=
    //     city + ":\n" +
    //     "temp: " + temp + " ºF\n" +
    //     "min: " + temp_min + " ºF\n" +
    //     "max: " + temp_max + " ºF\n" +
    //     "feels like: " + feels_like + " º F\n" +
    //     "description: " + description + "\n";
    // }
    // else{
    //     alert(zip + " is not a valid zip code.")
    // }

}

function clearBox(){
    document.getElementById("result").innerHTML = "";
}