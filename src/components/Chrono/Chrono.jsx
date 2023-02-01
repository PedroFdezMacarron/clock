
import './Chrono.scss'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

let miliseconds = 0; // miliseconds
let objDate= new Date("Jan 1, 2020 00:00:00");
let increment=1;
setInterval(() => (miliseconds = miliseconds + increment), 100);

export default function Chrono(){


    const [dateState, setDateState] = useState(objDate);
    

    useEffect(() => {
        console.log('actualiza');
        setInterval(() => setDateState(miliseconds = miliseconds + 0), 100);
      }, []);




    const setTimerOn=(value)=>{
        if(value){
            increment=1;
        }else{
            increment=0;
        }
    };
    const setTime=(newval)=>{
        miliseconds=newval;
    };
    return(
        <div  className="chrono-base">
            <div>
                 Chronograph:{miliseconds}
            </div>
            <div>
                <button className='btn' onClick={() => setTimerOn(true)}>Start</button>
                <button className='btn' onClick={() => setTimerOn(false)}>Stop</button>
                <button className='btn' onClick={() => setTimerOn(true)}>Resume</button>
                <button className='btn' onClick={() => setTime(0)}>Reset</button>
            </div>
        </div>

    )
}