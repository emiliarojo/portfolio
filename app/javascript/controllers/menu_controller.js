import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="menu"
export default class extends Controller {
  connect() {
     this.menuTarget.style.transition = "transform 0.5s ease-in-out";
  }
  static targets = ["menu"];

  showMenu() {
    this.menuTarget.style.transform = "translateX(0%)";
  }
  hideMenu() {
    this.menuTarget.style.transform = "translateX(-100%)";
  }
}
