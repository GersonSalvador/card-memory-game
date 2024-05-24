import {addDefaultEventsBtn} from './addDefaultEventsBtn.mjs'
import {constructScoreBoard} from './constructScoreBoard.mjs'
import {getBtn} from './getBtn.mjs'
import {setGameDifficult} from './setGameDifficult.mjs'
import {store} from './store.mjs'

window.addEventListener('load', ()=>{

  const cardMemoryGame = () => {
    store().init({
      isGameStarted: false,
      timerInterval: null,
      cardSelected: {},
      attempts: 0,
      cardSelected: {},
    })
    
    addDefaultEventsBtn(getBtn)
    setGameDifficult('easy', getBtn)
    constructScoreBoard()

  }

  cardMemoryGame()

})
  