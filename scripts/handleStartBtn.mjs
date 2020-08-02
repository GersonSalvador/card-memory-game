import {resign} from './resign.mjs'
import {start} from './start.mjs'
import {getBtn} from './getBtn.mjs'

export function handleStartBtn(flag){

  const btn = getBtn('start')

  if(flag === 'start'){
    btn.innerHTML = 'Start'
    btn.removeEventListener('click', resign)
    btn.addEventListener('click',start)
    return
  }

  if(flag === 'resign'){
    btn.innerHTML = 'Resign'
    btn.addEventListener('click', resign)
    btn.removeEventListener('click',start)
    return
  }

  throw new Error('Unkwon flag on handleStartBtn')

}