export function checkFinish(){
  
  const board = document.getElementById('board')
  const haveCards = [...board.childNodes].some(item => item.innerHTML !== '')
  
  return !haveCards
}