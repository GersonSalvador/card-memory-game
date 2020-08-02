import {hideCards} from './hideCards.mjs'

export function handleClick ({target}) {
  
  const cardWrap = target.parentNode.parentNode

  const id = target.dataset.id
  cardWrap.classList.add('selected')
  const cardIndex = cardWrap.dataset.index
  cardWrap.removeEventListener('click',handleClick)

  if(!game.cardSelected.id){
    game.cardSelected = {cardIndex,id}
  }else{

    setTimeout(() => hideCards({cardIndex, id}), 600)

    const cards = [...document.getElementById('board').childNodes]
    cards.map(card => card.removeEventListener('click',handleClick))

  }
}