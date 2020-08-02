import {getClock} from './getClock.mjs'

export function resetClock(){
  const {timerNodes} = getClock()

  timerNodes.hours.innerHTML = 0
  timerNodes.minutes.innerHTML = 0
  timerNodes.seconds.innerHTML = 0

}