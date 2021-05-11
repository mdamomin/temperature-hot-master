

function display(){
    const cityName = document.getElementById("city_input").value;
    document.getElementById("city_input").value="";
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=a87449574136ca21091c1dd1d1054133`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        const temp = data.main.temp;
        document.getElementById("city_name").innerText = cityName;
        document.getElementById("temparature").innerText = (temp-273).toFixed(2);
        const weather = data.weather[0].main;
        document.getElementById("lead").innerText = weather;
        switch(weather){
            case "Clouds":
                creatImage("Clouds");
                break;
            case "Clear":
                creatImage("Clear");
                break;
            case "Haze":
                creatImage("Haze");
                break;
            case "Rain":
                creatImage("Rain");
                break;
            case "Snow":
                creatImage("Snow");
                break;
            default:
                creatImage("others");
        }
        function creatImage(image){
            const img1 = document.createElement("img");
            img1.setAttribute("width","100")
            img1.setAttribute("height","50")
            img1.src = `images/${image}.png`;
            const item = document.getElementById("x");
            item.replaceChild(img1,item.childNodes[0] );
            

        }
    })
    
}

