import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['section']
  static colors = ['#FFFFFF', '#7DC6CC', '#FFFFFF', '#7DC6CC', '#FFFFFF']

  connect() {
    this.updateBackgroundColor()
    window.addEventListener('scroll', this.updateBackgroundColor.bind(this))
  }

  disconnect() {
    window.removeEventListener('scroll', this.updateBackgroundColor.bind(this))
  }

  updateBackgroundColor() {
    const scrollFromTop = window.scrollY
    const sections = this.sectionTargets

    for (let i = 0; i < sections.length; i++) {
      if (scrollFromTop <= sections[i].offsetTop) {
        document.body.style.backgroundColor = this.constructor.colors[i]
        break
      }
    }
  }
}
