import {start} from './start.mjs'
import {setActive} from './setActive.mjs'

export function addDefaultEventsBtn(getBtn){

  getBtn('start').addEventListener('click', start)
  getBtn('easy').addEventListener('click', ({target}) => setActive(target))
  getBtn('normal').addEventListener('click', ({target}) => setActive(target))
  getBtn('hard').addEventListener('click', ({target}) => setActive(target))
  getBtn('master').addEventListener('click', ({target}) => setActive(target))

}