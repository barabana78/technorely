// import * as $ from 'main.js'

function createAnalytics(): object {
  let counter: number = 0
  let destroyed: boolean = false

  const listener = (): number => counter++

  document.addEventListener('click', listener)

  return {
    destroy() {
      document.removeEventListener('click', listener)
      destroyed = true
      return 'destroyed'
    },

    getClicks() {
      if (destroyed) {
        return `Analytics is destroyed. Total clicks = ${counter}`
      }
      return counter
    },
  }
}

window['analytics'] = createAnalytics()
