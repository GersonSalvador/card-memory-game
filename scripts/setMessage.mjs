import {removeMessage} from './removeMessage.mjs'

export function setMessage({title, text, type}){

  removeMessage()

  const main = document.getElementsByTagName('main')
  const messageContainer = document.createElement('div')
  const messageTitle = document.createElement('h1')
  const messageText = document.createElement('h3')

  messageContainer.setAttribute('id','message-container')
  messageContainer.classList.add(type)
  messageTitle.innerHTML = title
  messageText.innerHTML = text

  messageContainer.appendChild(messageTitle)
  messageContainer.appendChild(messageText)
  main[0].appendChild(messageContainer)

}