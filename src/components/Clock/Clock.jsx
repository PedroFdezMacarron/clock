import React, {useState, useEffect} from 'react';

import './Clock.scss';
export default function Clock(){

    const [dateState, setDateState] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000);
      }, []);


    return(
        <div className="digital-clock">         
            {dateState.toLocaleTimeString()}
        </div>
    )
}