import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="make-scrollable"
export default class extends Controller {
  connect() {
      this.checkScroll()
      window.addEventListener('scroll', () => {
          this.checkScroll()
      })
  }

  checkScroll() {
      const footer = document.querySelector(".contact-container")
      const lastSection = document.getElementById('work')
      const scrollDistance = window.scrollY
      const lastSectionBottom = lastSection.offsetTop + lastSection.offsetHeight

      if (scrollDistance >= lastSectionBottom) {
          footer.style.overflowY = 'scroll'
      } else {
          footer.style.overflowY = 'hidden'
      }
  }
}
