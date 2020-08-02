export function showClock(){

    const clock = [...document.querySelectorAll('ul li')]
    clock.map(li => li.style.display = 'flex')

  }