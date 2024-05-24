import {handleClick} from './handleClick.mjs'

export function getCards (cardNum){

  // let imgs = [...Array(cardNum)].map((item, index) => new Date().getTime() + index)
  let imgs = [...Array(cardNum)].map((item, index) => index)
  
  imgs = [...imgs,...imgs]

  const cards = [...Array(imgs.length)].map((item, index) => {
    const cardWrap = document.createElement('div')
    const cardInner = document.createElement('div')
    const cardBack = document.createElement('div')
    const cardFront = document.createElement('div')
    const img = document.createElement('img')
  
    cardWrap.classList = 'card-wrap'
    cardInner.classList = 'card-inner'
    cardBack.classList = 'card-back'
    cardFront.classList = 'card-front'
  
    cardWrap.addEventListener('click', handleClick)
    const random = parseInt(Math.random() * imgs.length)
    
    img.setAttribute('src',`https://api.dicebear.com/8.x/bottts/svg?seed=${imgs[random]}`)
    
    cardFront.setAttribute('data-id', imgs[random])
    imgs.splice(random, 1)
    
    cardBack.appendChild(img)
    cardInner.appendChild(cardFront)
    cardInner.appendChild(cardBack)
    cardWrap.appendChild(cardInner)
    cardWrap.setAttribute('data-index', index)

    return cardWrap

  })
  
  return cards
}