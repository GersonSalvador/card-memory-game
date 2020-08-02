import {addDefaultEventsBtn} from './addDefaultEventsBtn.mjs'
import {constructScoreBoard} from './constructScoreBoard.mjs'
import {getBtn} from './getBtn.mjs'
import {setGameDifficult} from './setGameDifficult.mjs'

window.addEventListener('load', ()=>{

  const cardMemoryGame = () => {

    window.timerInterval = null
    window.cardSelected = {}
    
    addDefaultEventsBtn(getBtn)
    setGameDifficult('easy', getBtn)
    constructScoreBoard()

  }

  cardMemoryGame()

})
  