export function scoreCard({player, time, date}){

  const li = document.createElement('li')
  const divCard = document.createElement('div')
  const h4 = document.createElement('h4')
  const divInfo = document.createElement('div')
  const spanTime = document.createElement('span')
  const spanDate = document.createElement('span')

  spanTime.innerText = time
  spanDate.innerText = date
  h4.innerText = player

  divInfo.appendChild(spanTime)
  divInfo.appendChild(spanDate)
  divCard.appendChild(h4)
  divCard.appendChild(divInfo)
  li.appendChild(divCard)
  
  return li

}