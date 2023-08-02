let nwsGetGrid = new NWSGetGrid ();
let nwsGetForecast = new NWSGetForecast();


function button () {
    // alert("howdy");

    nwsGetGrid.request(getWeather);
}

function getWeather(){
    nwsGetForecast.gridId = nwsGetGrid.getGridId();
    nwsGetForecast.gridX = nwsGetGrid.getGridX();
    nwsGetForecast.gridY= nwsGetGrid.getGridY();

    nwsGetForecast.request(displayWeather);

}

function displayWeather() {
    const cond = document.getElementById("condition");
    const sun = document.getElementById("sun");
    const rain = document.getElementById("rain");
    cond.innerHTML = nwsGetForecast.getCurrentCondition();

    let highLow = nwsGetForecast.getHighLow();
    cond.innerHTML += `<br>${highLow.high}&deg;F / ${highLow.low}&deg;F`;

    let precip = nwsGetForecast.getPrecipitation();
    cond.innerHTML += `<br>${precip.chance}% chance of rain`;

    if (highLow.low < 60){
        document.getElementById("grad").className= "blueGrad";
       
    }
    if(highLow.high >= 60){
        document.getElementById("grad").className= "redGrad";
    }
    if( cond.innerHTML.includes("Sunny")){
        sun.removeAttribute("hidden");
    }
    if( cond.innerHTML.includes("Rain")){

    }

}

