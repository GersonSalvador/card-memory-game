import {removeMessage} from './removeMessage.mjs'
import {getDifficult} from './getDifficult.mjs'
import {getClock} from './getClock.mjs'
import {resetClock} from './resetClock.mjs'
import {startClock} from './startClock.mjs'
import {showClock} from './showClock.mjs'
import {getBtn} from './getBtn.mjs'
import {resign} from './resign.mjs'
import {getBoard} from './getBoard.mjs'

export function start (){

  removeMessage()

  const btn = getBtn('start')
  btn.innerHTML = 'Resign'
  btn.removeEventListener('click', start)
  btn.addEventListener('click',resign)

  const {pairs, width} = getDifficult()
  getBoard(pairs, width)
  resetClock(getClock)
  startClock()
  showClock()

}