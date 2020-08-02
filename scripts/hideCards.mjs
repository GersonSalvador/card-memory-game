import {checkFinish} from './checkFinish.mjs'
import {setMessage} from './setMessage.mjs'
import {resign} from './resign.mjs'
import {start} from './start.mjs'
import {handleClick} from './handleClick.mjs'
import {getBtn} from './getBtn.mjs'

export function hideCards ({cardIndex, id}){
      
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
  cardSelected = {}

  if(checkFinish()){

    clearInterval(timerInterval)

    const title = 'Congatulations!'
    const text = 'You won!'
    const type = 'success'
    const board = document.getElementById('board')
    const btn = getBtn('start')
    
    board.innerHTML = ''
    board.style.display = 'none'
    
    setMessage({title, text, type})

    btn.innerHTML = 'Start'
    btn.removeEventListener('click', resign)
    btn.addEventListener('click',start)

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