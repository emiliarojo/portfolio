import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="project-card-hover"
export default class extends Controller {
  static targets = ["cardInfo"]

  displayInfo() {
    this.cardInfoTarget.classList.remove('remove-info')
    // this.cardInfoTarget.classList.add('project-card-info')
  }

  hideInfo() {
    // this.cardInfoTarget.classList.remove('project-card-info')
    this.cardInfoTarget.classList.add('remove-info')
  }
}
