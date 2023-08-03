class NWSGetForecast {
    constructor () {
        this.lat = 42.2959;
        this.lon = -71.7129;
    }

    request(callback) {
        var xhttp = new XMLHttpRequest ();
        let self = this;

        xhttp.onreadystatechange = function() {
            //make sure that we are indeed getting our results back
            if(this.readyState != 4) return;

            //the next thing we want to do is:
            if (this.status != 200){
                alert(`Paylod bad (code ${this.status})`);
                return;
            }
            self.json = JSON.parse(this.responseText);
            if(callback !== undefined){
                callback();
            }
            
        }
        let URL = `https://api.weather.gov/gridpoints/${this.gridId}/${this.gridX},${this.gridY}/forecast`;
        xhttp.open("GET", URL, true);
        xhttp.send();
    }
    getHighLow(){
        let output = {high : null, low : null};
       let isFirstDaytime = this.json.properties.periods[0].isDaytime; 
       if (isFirstDaytime){
        output.high = this.json.properties.periods[0].temperature;
        output.low = this.json.properties.periods[1].temperature;
       } else {
        output.low = this.json.properties.periods[0].temperature;
        output.high = this.json.properties.periods[1].temperature;
       }
       return output;
    }
    getCurrentCondition(){
        return this.json.properties.periods[0].shortForecast;
    }

    getPrecipitation() {
        let output = {};

        output.chance = this.json.properties.periods[4].probabilityOfPrecipitation.value;
        if (output.chance == null) {
            output.chance = 0;
        }

        return output;
    }
}