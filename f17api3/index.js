



window.addEventListener("load",searchWeather)



     function searchWeather(){
         let search = document.getElementById("search").value;
    


         try {
             async function getWeather(){
                if( search == ""){
                    alert("Mamlakatingizni kirting ")
                }
                else{
                    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d5a25e0b9bf5c8c4661614349e49a932`)
                    .then((response) =>  response.json())
                    .then((data) => {
                        createWeather(data)
                    })
                }
             }    
             getWeather()  
             
             
              function createWeather(data){
                     let root = document.getElementById("root")
                       let weatherbox = document.createElement("div");
                       weatherbox.classList  = "weatherbox"
                       root.appendChild(weatherbox)

                       let img = document.createElement("img");
                     
                       weatherbox.appendChild(img)
                            if(data.weather[0].main === "Clear"){
                                img.src = "./img/sun.png";
                                
                                 

                               
                            } 
                            else if(data.weather[0].main === "Rain"){
                                img.src = "./img/rain.png";
                            }
                            else if(data.weather[0].main === "Clouds"){
                                img.src = "./img/cloud.png";
                            }
                  
                             let countryName = document.createElement("h1")
                             countryName.innerHTML = data.name
                             weatherbox.appendChild(countryName)

                             let main = document.createElement("h2")
                             main.innerHTML = "Weather condition:"  + data.weather[0].main
                             weatherbox.appendChild(main)
                             let description = document.createElement("h2")
                             description.innerHTML = "Description: " + data.weather[0].description
                             weatherbox.appendChild(description)
                             let timezone = document.createElement("h2")
                              timezone.innerHTML = "Timezone:"  + data.timezone
                              weatherbox.appendChild(timezone)
                      console.log(data);
              }
         } catch (e) {
          console.log(e);
         }
     }
