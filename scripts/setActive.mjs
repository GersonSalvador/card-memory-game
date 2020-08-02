export function setActive(target){

  document.getElementsByClassName('active')[0].classList.remove('active')
  if(target.nodeName === 'li'){
    target.classList.add('active')
  }else{
    target.parentNode.classList.add('active')
  }
}