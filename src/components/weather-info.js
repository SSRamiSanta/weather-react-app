import React,{ useEffect, useState } from 'react';

//En este componente se consume la API "WeatherApi" y se muestra el resultado en el mismo
export function Data({city}){
    /*Se captura el estado del clima actual en "weather" que va a contener el JSON que
    retorne la API*/
    const [weather, setWeather] = useState();

    /* "url" va a cambiar su valor en "city" por el parámetro como 'prop' 
    que recibe desde el componente padre "question.js"*/
    const url = 'http://api.weatherapi.com/v1/current.json?key=a45679d484b342a78a133555231801&q='+city+'&aqi=no';
    
    /* El 'hook' "useEfect" permite engancharse del ciclo de vida del url, el método
    "fetch()" realiza la petición a la API, se obtiene como respuesta el JSON el url se 
    estará acturalizando constantemente*/
    useEffect(() => {
    fetch(url).then((res) => res.json())
    .then((weat) => setWeather(weat))
    .catch((err) => console.log(err))
    }, [url])
    return(
        //La respuesta se compone de la temperatura, el estado del clima y un ícono
        <div className='answer-weather'>
            <ul>
                {!weather ? 'loading...': 'Temperature: '+weather.current?.temp_c+'°'?? ''}
            </ul>
            <ul>
                {!weather ? 'loading...': weather.current?.last_updated ?? ''}
            </ul>
            <ul>
                <img src={!weather ? 'loading...': weather.current?.condition?.icon ?? ''}/>
            </ul>
        </div>
    );
}
