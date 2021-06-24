import {resign} from './resign.mjs'
import {start} from './start.mjs'
import {getBtn} from './getBtn.mjs'

export function handleStartBtn(flag){

  const btn = getBtn('start', true)

  if(flag === 'start'){
    btn.innerHTML = 'Start'
    btn.parentNode.removeEventListener('click', resign)
    btn.parentNode.addEventListener('click',start)
    return
  }

  if(flag === 'resign', true){
    btn.innerHTML = 'Resign'
    btn.parentNode.addEventListener('click', resign)
    btn.parentNode.removeEventListener('click',start)
    return
  }

  throw new Error('Unkwon flag on handleStartBtn')

}