import {getBtn} from './getBtn.mjs'
import {setMessage} from './setMessage.mjs'
import {start} from './start.mjs'

export function resign(){

  clearInterval(timerInterval)

  const board = document.getElementById('board')
  const btn = getBtn('start')
  const title = 'Shame on you!'
  const text = 'You lost the '
  const type = 'failed'
  
  btn.innerHTML = 'Start'
  btn.removeEventListener('click', resign)
  btn.addEventListener('click', start)

  board.style.display = 'none'
  board.innerHTML = ''

  setMessage({title, text, type})
}