import ShowCard from './ShowCard'
import SearchBox from './SearchBox'
import { useState } from 'react'


export default function Weather(){

    let [Weather, setWeather] = useState({
        city : "Delhi",
        feels : "haze",
        humidity :23.4,
        pressure : 0,
        temp_now : 28,
        temp_max :29,
        temp_min : 19,
        weather : "rainy",
    });

    let connect = (result)=>{
        setWeather(result);
    };
    return(
        <div className='background-wrapper'>
            <h2>Weather Point</h2>
            <SearchBox cityName={connect}/>
            <ShowCard info={Weather}/>
            
        </div>
    )
}
