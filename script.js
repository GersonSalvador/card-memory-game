const cardMemoryGame = () => {
  
  let cardSelected = {}
  let timerInterval

  function resetClock(){
    const clock = getClock()

    clock.hours.innerHTML = 0
    clock.minutes.innerHTML = 0
    clock.seconds.innerHTML = 0

  }

  function showClock(){

    const clock = [...document.querySelectorAll('ul li')]
    clock.map(li => li.style.display = 'flex')
  }

  function getClock(){
      const timerNodes = [...document.querySelectorAll('ul li div')]
      const hours = parseInt(timerNodes[0].innerHTML)
      const minutes = parseInt(timerNodes[1].innerHTML)
      const seconds = parseInt(timerNodes[2].innerHTML)

      return {
        timerNodes: {
          hours: timerNodes[0], 
          minutes: timerNodes[1], 
          seconds: timerNodes[2]
        }, 
        hours, 
        minutes, 
        seconds
      }
  }

  function startClock(){

    const timer = () => {
      
      const {timerNodes, hours, minutes, seconds} = getClock()
      timerNodes.hours
      timerNodes.hours.innerHTML = minutes >= 59 && seconds >= 59 ? hours + 1 : hours
      timerNodes.minutes.innerHTML = seconds >= 59 
        ? minutes < 59 ? minutes + 1 : 0
        : minutes
      timerNodes.seconds.innerHTML = seconds < 59 ? seconds + 1 : 0
    }

    timerInterval = setInterval(timer, 1000)
  }

  function hideCards ({cardIndex, id}){
    console.log('hideCards', cardSelected, id)
    if(cardSelected.id === id){
      console.log('equal')
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

    if(!checkFinish()){
      clearInterval(timerInterval)
      document.getElementById('board').innerHTML = ''
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

  function checkFinish(){
    const board = document.getElementById('board')
    const haveCards = [...board.childNodes].some(item => item.innerHTML !== '')
    return haveCards
  }

  function handleClick ({target}) {
    console.log('handleClick')
    const cardWrap = target.parentNode.parentNode
  
    const id = target.dataset.id
    cardWrap.classList.add('selected')
    const cardIndex = cardWrap.dataset.index
    cardWrap.removeEventListener('click',handleClick)
  
    if(!cardSelected.id){
      cardSelected = {cardIndex,id}
    }else{

      setTimeout(() => hideCards({cardIndex, id}), 1200)

      const cards = [...document.getElementById('board').childNodes]
      cards.map(card => card.removeEventListener('click',handleClick))

    }
  }

  function getCards (imgs){
    
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
      
      img.setAttribute('src',`https://images.unsplash.com/photo-${imgs[random]}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80`)
      
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

  function getBoard ({imgs}){
    
    const board = document.getElementById('board')
    getCards(imgs).map(card => board.appendChild(card))
    board.style.display = 'flex'
  }

  function start (config){
    getBoard(config)
    
    resetClock()
    startClock()
    showClock()
  }

  return {start}

}

window.addEventListener('load', ()=>{

  const btn = document.getElementById('start')

  const game = cardMemoryGame()
  const imgs = [
    '1484406566174-9da000fda645',
    '1545006398-2cf47cd87b90',
    '1516934024742-b461fba47600',
    '1555169062-013468b47731',
    '1462953491269-9aff00919695',
    '1530126483408-aa533e55bdb2',
    '1476293602671-beea27e1e702',
    '1488793207478-ff0892419e30'
  ]
  
  btn.addEventListener('click', () => game.start({imgs}))
})