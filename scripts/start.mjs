import {removeMessage} from './removeMessage.mjs'
import {getDifficult} from './getDifficult.mjs'
import {getClock} from './getClock.mjs'
import {resetClock} from './resetClock.mjs'
import {startClock} from './startClock.mjs'
import {showClock} from './showClock.mjs'
import {handleStartBtn} from './handleStartBtn.mjs'
import {getBoard} from './getBoard.mjs'

export function start (){

  removeMessage()

  handleStartBtn('resign')

  const {pairs, width} = getDifficult()
  getBoard(pairs, width)
  resetClock(getClock)
  startClock()
  showClock()

}