document.querySelector('button').addEventListener('click',()=>{


    const place = document.getElementById('location').value;
    
    function updateTemp(data){
       const element = document.getElementById('weatherInfo');
    //    element.innerHTML = `Today's Temperature: ${data.current.temp_c} in celcius`;
    //    element.innerHTML += `Today's Temperature:${data.current.temp_f} in Farhenit`;
          element.innerHTML = `<p>Today's Temperature: ${data.current.temp_c} in celcius</p>
                              <p>Today's Temperature:${data.current.temp_f} in Farhenit</p>
                              <p>Condition :${data.current.condition.text}</p>
                              <img src="${data.current.condition.icon}" alt="weather icon">
                              <p>Wind Speed :${data.current.wind_kph} in KPH</p>
                              <p>Country:${data.location.country}</p>
                              <p>Region: ${data.location.region}</p>
                              <p>Local Time : ${data.location.localtime}</p>
                              `
}

    const prom = fetch(`https://api.weatherapi.com/v1/current.json?key=392d7fe780584f24b3b155650252210&q=${place}&aqi=yes`)
    


    prom
    .then(response=>response.json())
    .then(data=> updateTemp(data));



})
const resetbtn=document.querySelectorAll('button')[1];
resetbtn.addEventListener('click',()=>{
    const input=document.getElementById('location');
    const ele=document.getElementById('weatherInfo');
    input.value="";
    ele.innerHTML=" ";
})
