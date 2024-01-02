import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="menu"
export default class extends Controller {
  connect() {
     this.menuTarget.style.transition = "transform 0.5s ease-in-out";
  }
  static targets = ["menu", "body"];

  showMenu() {
    this.menuTarget.style.transform = "translateX(0%)";
    this.bodyTarget.style.overflowY = "hidden";
  }
  hideMenu() {
    this.menuTarget.style.transform = "translateX(-100%)";
    this.bodyTarget.style.overflowY = "auto";
  }
}
