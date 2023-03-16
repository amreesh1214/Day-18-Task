let division = document.createElement('div')
division.setAttribute('class','container') 

let heading = document.createElement("h1"); 
heading.innerHTML="Weather Report for city";

let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id","inp") ;
input.setAttribute("placeholder", "Enter the City Name ");

let div1 = document.createElement("div")
div1.setAttribute("class","row col-lg-4 col-sm-12")
let div2 = document.createElement("div")
div2.setAttribute("class","card card-header card-body")
let btn=document.createElement("button")
btn.setAttribute("class","btn btn-primary")
btn.setAttribute("text","Click for Weather")
div2.append(btn)
div1.append(div2)
division.append(div1)
btn.innerHTML="Click for Weather"
document.body.append(division)
btn.addEventListener('click', () => { 
    getCountry();
  });


division.append(heading)
division.append(input)
division.append(btn)
division.append(weather)
document.body.append(division)

async function getCountry(){
    let cc = document.getElementById("span");
   
    try{
   
    var cityName = await fetch(`https://restcountries.com/v3.1/all`)
    var result= await cityName.json()
    console.log(result)

var randomCity = Math.floor(Math.random()*result.length)
console.log(randomCity)
console.log(result[randomCity].name.common)

var cityNames= result[randomCity].name.common
console.log(cityNames)

var weatherReport = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNames}&appid=c76f7b61c7d0a61e8de46cf56e74447b`)
var result1= await weatherReport.json()
console.log(result1)



document.getElementById("weather").innerText=`
Temperature:${result1.main.temp} 
Humidity:${result1.main.humidity}
Max Temperature:${result1.main.temp_max}
Min Temperature:${result1.main.temp_min}`;

    }
    catch(err){
        console.log("Some error occured"+ err)
    }
}
getCountry();