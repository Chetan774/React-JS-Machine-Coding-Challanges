import React, { useEffect, useState } from "react";
import './CountDownTimer.css'
export const CountDownTimer = () =>{

    const [inputHours, setInputHours] = useState(0);
    const [inputMinutes, setInputMinutes] = useState(0);
    const [inputSeconds, setInputSeconds] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);


    useEffect(()=>{
        const interval = setInterval(()=>{
          if(seconds > 0){
            setSeconds((prev)=> prev-1);
          }else if(minutes > 0){
            setMinutes((prev)=> prev-1);
            setSeconds(60);
          }else if(hours > 0){
            setHours((prev)=> prev-1);
            setMinutes(60)
          }
        }, 1000)

        return ()=> clearInterval(interval)

    }, [hours, minutes, seconds])

     const startTimer = () =>{
        setHours(inputHours)
        setMinutes(inputMinutes)
        setSeconds(inputSeconds)
     }

    return <div>
        <div>Input Time In Hours</div>
        Hours :<input type="number" onChange={(e)=> setInputHours(Number(e.target.value))} />
        Minutes :<input type="number" onChange={(e)=> setInputMinutes(Number(e.target.value))} />
        Seconds :<input type="number" onChange={(e)=> setInputSeconds(Number(e.target.value))} />
        <button className="button" onClick={()=> startTimer()}>Start</button>
        <div className="conatiner">
            <span className="span">{hours}</span>:
            <span className="span">{minutes}</span>:
            <span className="span">{seconds}</span>
        </div>
    </div>
} 