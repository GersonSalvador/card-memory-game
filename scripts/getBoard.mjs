import {getCards} from './getCards.mjs'

export function getBoard (cardNum, boardWidth){
      
  const board = document.getElementById('board')
  board.style.width = `${boardWidth}px`
  getCards(cardNum).map(card => board.appendChild(card))
  board.style.display = 'flex'
}