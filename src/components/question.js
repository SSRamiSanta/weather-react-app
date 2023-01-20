import React, {useState} from 'react';
import {Select} from './selector.js';
import {Data} from './weather-info.js';
import '../stylesheets/question.css'



//Se define el componente que realiza la gestión entre la pregunta y la respuesta
export function Cities(){
    //Hay que capturar el string elegido por el usuario, se realiza mediante el "Hook" de captura de estado
    const [city, setCity] = useState('Bogota');
    
    return(
    /*Se renderiza el componente "Select" de la clase "selector.js" y mediante la 
    función "captureValue" como parámetro, se captura el evento y la opción escogida*/
    /*A continuación se renderiza el componente "Data" de la clase "weather-info.js"
    y se envía como parámetro "city" el cual tiene guardada la opción escogida por el usuario*/
        <div className='app-weather'>
            <div className='city-question'>
                <Select 
                captureValue={function captureValue (event){
                                setCity(event.target.value)
                }}
                />
            </div>
            <div className='app-answer'>
                <Data 
                city={city}
                />
            </div>   
        </div>
    );
}

