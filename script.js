window.addEventListener('load', ()=>{

  const cardMemoryGame = () => {
    
    let cardSelected = {}
    let timerInterval

    function resetClock(){
      const {timerNodes} = getClock()

      timerNodes.hours.innerHTML = 0
      timerNodes.minutes.innerHTML = 0
      timerNodes.seconds.innerHTML = 0

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
      console.log('hideCards')
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

    function checkFinish(){
      const board = document.getElementById('board')
      const haveCards = [...board.childNodes].some(item => item.innerHTML !== '')
      return !haveCards
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

        setTimeout(() => hideCards({cardIndex, id}), 600)

        const cards = [...document.getElementById('board').childNodes]
        cards.map(card => card.removeEventListener('click',handleClick))

      }
    }

    function getCards (cardNum){

      let imgs = [...Array(cardNum)].map((item, index) => new Date().getTime() + index)
      console.log(imgs)
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
        
        img.setAttribute('src',`https://avatars.dicebear.com/api/bottts/${imgs[random]}.svg`)
        
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

    function getBoard (cardNum, boardWidth){
      
      const board = document.getElementById('board')
      board.style.width = `${boardWidth}px`
      getCards(cardNum).map(card => board.appendChild(card))
      board.style.display = 'flex'
    }

    function getBtn(btnId){
      return document.getElementById(btnId)
    }

    function setActive(target){

      document.getElementsByClassName('active')[0].classList.remove('active')
      if(target.nodeName === 'li'){
        target.classList.add('active')
      }else{
        target.parentNode.classList.add('active')
      }
    }

    function addDefaultEventsBtn(){

      getBtn('start').addEventListener('click', start)
      getBtn('easy').addEventListener('click', ({target}) => setActive(target))
      getBtn('normal').addEventListener('click', ({target}) => setActive(target))
      getBtn('hard').addEventListener('click', ({target}) => setActive(target))
      getBtn('master').addEventListener('click', ({target}) => setActive(target))

    }

    function getDifficult(){
      const difficults = {
        easy: {
          pairs: 6,
          width: 440
        },
        normal: {
          pairs: 10,
          width: 550
        },
        hard: {
          pairs: 15,
          width: 660
        },
        master: {
          pairs: 18,
          width: 660
        }
      }
      const difficult = document.getElementsByClassName('active')[0].getAttribute('id')
      return difficults[difficult]
    }

    function start (){
      console.log('game start')

      removeMessage()

      const btn = getBtn('start')
      btn.innerHTML = 'Resign'
      btn.removeEventListener('click', start)
      btn.addEventListener('click',resign)
      
      const {pairs, width} = getDifficult()
      getBoard(pairs, width)
      resetClock()
      startClock()
      showClock()
    }

    function removeMessage(){

      const messageContainer = document.getElementById('message-container')
      if(messageContainer)
        messageContainer.remove()
    }

    function setMessage({title, text, type}){

      removeMessage()

      const section = document.getElementsByTagName('section')
      const messageContainer = document.createElement('div')
      const messageTitle = document.createElement('h1')
      const messageText = document.createElement('h3')

      messageContainer.setAttribute('id','message-container')
      messageContainer.classList.add(type)
      messageTitle.innerHTML = title
      messageText.innerHTML = text

      messageContainer.appendChild(messageTitle)
      messageContainer.appendChild(messageText)
      section[0].appendChild(messageContainer)

    }
    
    function resign(){

      clearInterval(timerInterval)

      const board = document.getElementById('board')
      const btn = getBtn('start')
      const title = 'Shame on you!'
      const text = 'You lost the '
      const type = 'failed'
      
      btn.innerHTML = 'Start'
      btn.removeEventListener('click', resign)
      btn.addEventListener('click', start)

      board.style.display = 'none'
      board.innerHTML = ''

      setMessage({title, text, type})
    }

    function setGameDifficult(btnId){
      const btnEasy = getBtn(btnId)
      btnEasy.classList.add('active')
    }

    addDefaultEventsBtn()
    setGameDifficult('easy')

  }

  cardMemoryGame()

})
