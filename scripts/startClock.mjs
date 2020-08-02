import {getClock} from './getClock.mjs'

export function startClock(){

  const timer = () => {
    
    const {timerNodes, hours, minutes, seconds} = getClock()
    timerNodes.hours
    timerNodes.hours.innerHTML = minutes >= 59 && seconds >= 59 ? hours + 1 : hours
    timerNodes.minutes.innerHTML = seconds >= 59 
      ? minutes < 59 ? minutes + 1 : 0
      : minutes
    timerNodes.seconds.innerHTML = seconds < 59 ? seconds + 1 : 0
  }

  timerInterval = setInterval(timer, 1000)
}