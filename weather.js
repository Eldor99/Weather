const ui = new UI();

class Weather {
    constructor(){
        this.apiKey = "37b9778e897047afa12161014211207";
    }

    // Fetch weather from API
    async getWeather(city) {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city}&aqi=no`);
        console.log(response.status);
        if(response.status === 200){
            const responseData = response.json();
            return responseData;
        }else{
            return ui.displayError();
        }
        
    }

    // Change weather location
    changeLocation(city){
        this.city = city;
    }
}

