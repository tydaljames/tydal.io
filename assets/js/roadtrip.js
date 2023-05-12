var string = "";


function roadTrip() {
    clearBox();

    document.getElementById("result").value = "Calculating route...";

    var startCity = document.getElementById("startCity").value;
    var endCity = document.getElementById("endCity").value;

    var apiUrl = "https://c062ryv3xe.execute-api.us-east-2.amazonaws.com/test/roadtrip?startCity=" + startCity + "&endCity=" + endCity;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                document.getElementById("result").value = JSON.stringify(response, null, 2).slice(2, -1);
            } else {
                console.error("API call failed with status " + xhr.status);
            }
        }
    };
    xhr.send();
}

function clearBox(){
    document.getElementById("result").value = "";
}