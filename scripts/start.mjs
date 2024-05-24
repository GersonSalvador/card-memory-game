import {removeMessage} from './removeMessage.mjs'
import {getDifficult} from './getDifficult.mjs'
import {getClock} from './getClock.mjs'
import {resetClock} from './resetClock.mjs'
import {startClock} from './startClock.mjs'
import {showClock} from './showClock.mjs'
import {handleStartBtn} from './handleStartBtn.mjs'
import {getBoard} from './getBoard.mjs'
import {store} from './store.mjs'

export function start (){
  const game = store()
  game.set('isGameStarted', true)

  removeMessage()

  handleStartBtn('start')

  const {pairs, width} = getDifficult()
  getBoard(pairs, width)
  resetClock(getClock)
  startClock()
  showClock()

}