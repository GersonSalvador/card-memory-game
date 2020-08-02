import {setMessage} from './setMessage.mjs'
import {handleStartBtn} from './handleStartBtn.mjs'

export function resign(){

  clearInterval(game.timerInterval)

  const board = document.getElementById('board')
  const title = 'Shame on you!'
  const text = 'You lost the '
  const type = 'failed'
  
  handleStartBtn('resign')

  board.style.display = 'none'
  board.innerHTML = ''

  setMessage({title, text, type})
}