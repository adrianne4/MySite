class NWSGetGrid {
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
        let URL = `https://api.weather.gov/points/${this.lat},${this.lon}`;
        xhttp.open("GET", URL, true);
        xhttp.send();
    }
    getGridId(){
        return this.json.properties.gridId;
    }
    getGridX(){
        return this.json.properties.gridX;
    }
    getGridY(){
        return this.json.properties.gridY;
    }
}