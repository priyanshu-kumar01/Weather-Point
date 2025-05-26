import { use, useState } from "react"
export default function SearchBox({ cityName }){
    let [city, setCity] = useState("");
    let [error, setError]  =  useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "f0505176563e4080a69dabc85a5714e1";

    let weatherInfo = async()=>{
       try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonRES = await response.json();
       let result = {
        // feels : jsonRES.main.feels_like,
        city :  city,
        humidity : jsonRES.main.humidity,
        pressure : jsonRES.main.pressure,
        temp_now : jsonRES.main.temp,
        temp_max : jsonRES.main.temp_max,
        temp_min : jsonRES.main.temp_min,
        weather : jsonRES.weather[0].main
       }
       console.log(result);
       console.log(jsonRES);

       return result;
       }catch(err){
        throw err;
       }
    }
    

    let hndlBtn = (evt)=>{
        setCity(evt.target.value);
    };
    
    let hndlSubmit = async(evt)=>{
        try{
            evt.preventDefault();
        console.log(city);
        setCity("");
        let info = await weatherInfo();
        cityName(info);
        setCity("");
        }catch(err){
            setError(true);
        }
    }

    return(
        <div onSubmit={hndlSubmit}>
            <h3>Search the city name!</h3>
            <form>
                <input type="text" placeholder="City Name" value={city} onChange={hndlBtn} required/>
                <br /> <br /> 
                <button>Submit</button>
            </form>
            {error && <p style={{color:"red"}}><b><i>Coudn't find the City Name</i></b></p>}
        </div>
    )
}

