export function getDifficult(){
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