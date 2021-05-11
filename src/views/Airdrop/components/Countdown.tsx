import React,{useState,useEffect} from 'react'
import moment from 'moment';
import { Text } from '@pancakeswap-libs/uikit'

interface CountdownValueProps {
    destTime: number 
    head: string    
}

const Countdown: React.FC<CountdownValueProps> = (Props) => { 
  const { destTime,head } = Props;  
  const [countdownDate, setCountdownDate] = useState(destTime);   
  const [distance, setDistance] = useState(0)
  const [countdown, setCountdown] = useState({Days:"0",Hours: "0",Mins:"0",Secs:"0"}) 
  
  
  useEffect(() => {  
    const updateCountdown = () => {                    
        setDistance(countdownDate - parseInt(moment().format('X')))                
        setCountdown({
            Days: distance>0 ? Math.floor(distance / (60 * 60 * 24)).toFixed(0):"0",
            Hours: distance>0 ? Math.floor(distance / (60 * 60) % 24).toFixed(0):"0",
            Mins: distance>0 ? Math.floor(distance / 60 % 60).toFixed(0):"0",
            Secs: distance>0 ? Math.floor(distance % 60).toFixed(0):"0",
        })   
    };

    let timerID = null 
    
    if(destTime>0){
        timerID = setInterval(() => updateCountdown(), 1000);
    }else if(destTime <= 0 && distance !== 0){
      clearInterval(timerID);
    }
   
    return () => clearInterval(timerID)
    
  },[countdownDate,destTime,distance])

  
  return (
   
      <Text>{head}<br/>{countdown.Days}:{countdown.Hours}:{countdown.Mins}:{countdown.Secs}</Text>
   
  )
}

export default Countdown
