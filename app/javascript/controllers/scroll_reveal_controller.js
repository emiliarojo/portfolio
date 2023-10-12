import { Controller } from "@hotwired/stimulus"
import ScrollReveal from 'scrollreveal';

// Connects to data-controller="scroll-reveal"
export default class extends Controller {
  static targets = ["icon"];

  connect() {
    this.iconTargets.forEach((icon) => {
      ScrollReveal().reveal(icon, {
        delay: 200,
        reset: true,
        scale: 1.2
      })
    });
  }
}
