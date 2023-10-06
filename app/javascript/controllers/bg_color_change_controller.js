import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['section', 'main'];
  static colors = ['#FFFFFF', '#1B1C1E', '#FFFFFF', '#7DC6CC'];

  connect() {
    this.updateBackgroundColor();
    window.addEventListener('scroll', this.updateBackgroundColor.bind(this));
  }

  disconnect() {
    window.removeEventListener('scroll', this.updateBackgroundColor.bind(this));
  }

  updateBackgroundColor() {
    const scrollFromTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    const sections = this.sectionTargets;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        scrollFromTop + viewportHeight * 0.15 >= sectionTop &&
        scrollFromTop <= sectionTop + sectionHeight
      ) {
        this.mainTarget.style.backgroundColor = this.constructor.colors[i];
        break;
      }
    }
  }
}
