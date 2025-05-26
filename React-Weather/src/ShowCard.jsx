import { useState } from "react"
import "./ShowCard.css"
export default function ShowCard({ info }){
    // let [info, setInfo] = useState({
    //     feels : jsonRES.main.feels_like,
    //     humidity : jsonRES.main.humidity,
    //     pressure : jsonRES.main.pressure,
    //     temp_now : jsonRES.main.temp,
    //     temp_max : jsonRES.main.temp_max,
    //     temp_min : jsonRES.main.temp_min,
    //     weather : jsonRES.weather[0].main
    // })

    

    let Hot_URL = "https://th.bing.com/th/id/OIP.vuEEjVtVs7ihysKdVl_RIQHaEK?rs=1&pid=ImgDetMain";
    let Rainy_URL = "https://th.bing.com/th/id/OIP.pK9etoOYX5fIaFjv11IKiwHaFj?rs=1&pid=ImgDetMain";
    let Summer_URL = "https://www.bing.com/th/id/OIP.DcGax9fNIa2cnsF5FA53TgHaEo?w=240&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
    let Winter_URL = "https://th.bing.com/th/id/OIP.Vsla0F-oGLB7rOxMGSWR2gHaEo?rs=1&pid=ImgDetMain";
    
    let {temp_now, humidity} = info;

    let imageURL = 

    temp_now >= 50 ? Hot_URL :
    temp_now >= 25 ? Summer_URL:
    temp_now < 20 ? Winter_URL:
    humidity <= 70 ? Rainy_URL : " ";
 
    return(
        <div className="card">

        {imageURL && <img src={imageURL} alt="Weather" />}

        <br />
        <span style={{color :"salmon"}}>City = {info.city}</span> <br />
        <span style={{color :"salmon"}}>Humidity = {info.humidity}</span> <br />
        <span style={{color :"salmon"}}>Pressure = {info.pressure}</span> <br />
        <span>Temprature Now = {info.temp_now}</span> <br />
        <span style={{color : "green"}}>Temprature Minimum = {info.temp_min}</span> <br />
        <span style={{color : "red"}}>Tempraure Mazimum ={info.temp_max}</span> <br />
        <span style={{color :"salmon"}}>Weather = {info.weather}</span> <br />
        </div>
    )
}