export function removeMessage(){

  const messageContainer = document.getElementById('message-container')
  if(messageContainer)
    messageContainer.remove()
}