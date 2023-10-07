import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="scroll-to-section"
export default class extends Controller {
  static targets = ["about", "skills", "work", "footer"];

  connect() {
  }

  scrollSection(event) {
    const linkValue = event.currentTarget.dataset.value;
    const target = this[`${linkValue}Target`];
    target.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}
