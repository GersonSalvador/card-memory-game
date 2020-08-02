export function getClock(){

  const timerNodes = [...document.querySelectorAll('ul li div')]
  const hours = parseInt(timerNodes[0].innerHTML)
  const minutes = parseInt(timerNodes[1].innerHTML)
  const seconds = parseInt(timerNodes[2].innerHTML)

  return {
    timerNodes: {
      hours: timerNodes[0], 
      minutes: timerNodes[1], 
      seconds: timerNodes[2]
    }, 
    hours, 
    minutes, 
    seconds
  }
}