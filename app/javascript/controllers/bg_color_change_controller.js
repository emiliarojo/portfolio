import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['section', 'main'];
  static colors = ['#FFFFFF', 'black', '#FFFFFF', '#7DC6CC'];

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

      const thirdSectionHeight = sectionHeight * 0.33;

      if (
        scrollFromTop + viewportHeight >= sectionTop + thirdSectionHeight &&
        scrollFromTop <= sectionTop + sectionHeight - thirdSectionHeight
      ) {
        this.mainTarget.style.backgroundColor = this.constructor.colors[i];
        break;
      }
    }
  }


}
