export function setGameDifficult(btnId, getBtn){

  const btnEasy = getBtn(btnId)
  btnEasy.classList.add('active')
  
}