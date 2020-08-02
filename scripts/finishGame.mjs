import {setMessage} from './setMessage.mjs'

export function finishGame(){
  const title = 'Congatulations!'
  const text = 'You won!'
  const type = 'success'
  const board = document.getElementById('board')
  
  clearInterval(game.timerInterval)
  setMessage({title, text, type})
  
  board.innerHTML = ''
  board.style.display = 'none'
  
}