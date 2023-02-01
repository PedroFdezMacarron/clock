import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

let countDown = 0; // seconds
let objDate= new Date("Jan 1, 2020 00:00:00");

var numberOfMlSeconds = objDate.getTime();
setInterval(() => (countDown = countDown+1000), 1000);


export default function Countdown(){

    const [dateState, setDateState] = useState(objDate);    

    useEffect(() => {
        console.log('actualiza');
        setInterval(() => setDateState(new Date(numberOfMlSeconds - countDown)), 1000);
      }, []); 

    return(
        <div className="digital-clock">      
            
          <div>
               Fecha: {dateState.toLocaleDateString()}   
          </div>
          <div>
                Hora: {dateState.toLocaleTimeString()}   
          </div> 

        </div>
    )

}