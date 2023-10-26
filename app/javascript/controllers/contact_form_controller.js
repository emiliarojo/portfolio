import { Controller } from "@hotwired/stimulus"
import emailjs from "emailjs-com"

// Connects to data-controller="contact-form"
export default class extends Controller {
  static targets = ["firstName", "lastName", "email", "message"];

  connect() {
    emailjs.init('RGaGiUgQl-GqZbt6J');
  }

  send() {
    const emailService = "service_3jb1avs"; // Replace with your Email.JS service ID
    const templateId = "template_zk2g3dv"; // Replace with your Email.JS template ID

    const formElement = document.querySelector(".form-container");
    const successMessage = document.querySelector(".contact-success-message");

    const templateParams = {
      firstName: this.firstNameTarget.value,
      lastName: this.lastNameTarget.value,
      email: this.emailTarget.value,
      message: this.messageTarget.value,
    };

    emailjs.send(emailService, templateId, templateParams).then(
      function (response) {
        console.log("Sent successfuly", response);
        // Add your success handling logic here, e.g., show a success message
        formElement.style.display = "none";
        successMessage.style.display = "flex";
      },
      function (error) {
        console.error("Failed to send", error);
        this.firstNameTarget.value = "";
        this.lastNameTarget.value = "";
        this.emailTarget.value = "";
        this.messageTarget.value = "";
        // Add your error handling logic here, e.g., show an error message
      }
    );
  }
}
