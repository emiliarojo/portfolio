import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["animatedElement"];

  connect() {
    // Initialize the animation when the controller is connected
    this.animateIfInView();
    // Add event listeners for scroll and resize events
    window.addEventListener("scroll", this.animateIfInView.bind(this));
    window.addEventListener("resize", this.animateIfInView.bind(this));
  }

  disconnect() {
    // Remove event listeners when the controller is disconnected
    window.removeEventListener("scroll", this.animateIfInView.bind(this));
    window.removeEventListener("resize", this.animateIfInView.bind(this));
  }

  animateIfInView() {
    const element = this.animatedElementTarget;

    if (this.isElementInViewport(element)) {
      // Add your animation logic here
      element.classList.add("blue-box-shadow"); // Replace "blue-box-shadow" with your CSS class for animation
    }
  }

  isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    return (
      rect.top >= 0 &&
      rect.bottom <= windowHeight
    );
  }
}
