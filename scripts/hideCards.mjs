import {checkFinish} from './checkFinish.mjs'
import {handleClick} from './handleClick.mjs'
import {handleStartBtn} from './handleStartBtn.mjs'
import {finishGame} from './finishGame.mjs'
import {store} from './store.mjs'

export function hideCards ({cardIndex, id}){

  const gameStore = store()
  const cardSelected = gameStore.get('cardSelected')
  if(cardSelected.id === id){
  
    const cards = [
      document.querySelector(`div[data-index="${cardIndex}"]`),
      document.querySelector(`div[data-index="${cardSelected.cardIndex}"]`)
    ]
    
    cards.map(item => {
      item.removeEventListener('click', handleClick)
      item.getElementsByClassName.cursor = 'initial'
      item.innerHTML = ''
    })
  }

  gameStore.set('cardSelected', {})

  if(checkFinish()){
    handleStartBtn('start')
    finishGame()
    gameStore.set('isGameStarted', false)
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