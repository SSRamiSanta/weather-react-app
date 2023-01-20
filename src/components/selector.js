import React, {useState} from 'react';
import '../stylesheets/selector.css'


//Se define el componente con el que interactúa el usuario
export function Select({captureValue}){
    /*El cambio del valor escogido se asigna a "captureValue" mediante la herramienta
    "onChange" de HTML*/
    /*Cada uno de los valores de las opciones debe coincidir 
    con las aceptadas por la API "weatherapi"*/
    return(
        <select id='city-select' onChange={captureValue}>
            <option value='Bogotá'>Bogotá</option>
            <option value='Medellín'>Medellín</option>
            <option value='Bucaramanga'>Bucaramanga</option>
            <option value='Cali'>Cali</option>
            <option value='Pasto'>Pasto</option>
            <option value='Pereira'>Pereira</option>
            <option value='Villavicencio'>Villavicencio</option>
            <option value='Santa Marta'>Santa Marta</option>
            <option value='Barrancabermeja'>Barrancabermeja</option>
            <option value='Cartagena'>Cartagena</option>
            <option value='Honda'>Honda</option>
            <option value='Neiva'>Neiva</option>
            <option value='Barranquilla'>Barranquilla</option>
        </select>
    );
}