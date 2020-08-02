export function constructScoreBoard(){

  const scores = JSON.parse(localStorage.getItem('scores'))
  const scoreBoard = document.querySelector('#scoreBoard ul')

  if(scores){
    Object.entries(scores).map(player => {
      console.log(player)
      player.map(card => scoreBoard.appendChild(scoreCard(card)))
    })
  }
  
}