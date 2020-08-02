import {checkFinish} from './checkFinish.mjs'
import {handleClick} from './handleClick.mjs'
import {handleStartBtn} from './handleStartBtn.mjs'
import {finishGame} from './finishGame.mjs'

export function hideCards ({cardIndex, id}){

  game.attempts += 1
  console.log(game.attempts)
  if(game.cardSelected.id === id){
  
    const cards = [
      document.querySelector(`div[data-index="${cardIndex}"]`),
      document.querySelector(`div[data-index="${game.cardSelected.cardIndex}"]`)
    ]
    
    cards.map(item => {
      item.removeEventListener('click', handleClick)
      item.getElementsByClassName.cursor = 'initial'
      item.innerHTML = ''
    })
  }

  game.cardSelected = {}

  if(checkFinish()){

    handleStartBtn('start')
    finishGame()

  }else{
    const cards = [...document.getElementById('board').childNodes]
    cards.map(card => {
      const classList = [...card.classList]
      
      if(classList.includes('selected'))
        card.classList.remove('selected')
      
      if(card.childNodes.innerHTML !== '')
        card.addEventListener('click',handleClick)
    })
  }
}