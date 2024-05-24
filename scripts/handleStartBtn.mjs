import {resign} from './resign.mjs'
import {start} from './start.mjs'
import {getBtn} from './getBtn.mjs'
import {store} from './store.mjs'

export function handleStartBtn(flag){
  const isGameStarted = store().get('isGameStarted')
  const btn = getBtn('start', true)

  if(flag === 'start'){
    if(isGameStarted) return
    btn.innerHTML = 'Start'
    btn.parentNode.removeEventListener('click', resign)
    btn.parentNode.addEventListener('click',start)
    return
  }

  if(flag === 'resign', true){
    if(!isGameStarted) return
    btn.innerHTML = 'Resign'
    btn.parentNode.addEventListener('click', resign)
    btn.parentNode.removeEventListener('click',start)
    return
  }

  throw new Error('Unkwon flag on handleStartBtn')

}