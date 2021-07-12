const cityName = document.getElementById('city');
const temp = document.getElementById('temp');

class UI {
    displayTemp(data){
        cityName.innerHTML = data.location.name
        
        temp.innerHTML = data.current.temp_c
        console.log(data.location.name);
    }

    displayError(){
        cityName.innerHTML = "Something went wrong"
    }
}