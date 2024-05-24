import {setMessage} from './setMessage.mjs'
import {handleStartBtn} from './handleStartBtn.mjs'
import {store} from './store.mjs'

export function resign(){
  const gameStore = store()
  const timerInterval = gameStore.get('timerInterval')
  clearInterval(timerInterval)

  const board = document.getElementById('board')
  const title = 'Shame on you!'
  const text = 'You lost the game'
  const type = 'failed'
  
  handleStartBtn('start')

  board.style.display = 'none'
  board.innerHTML = ''

  setMessage({title, text, type})
  gameStore.set('isGameStarted', false)
}