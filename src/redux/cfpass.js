import { HTMLInputElement } from "dom";
import { addEventListener } from "dom";
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

function checkPasswords() {
  if (passwordInput.checkValidity() && confirmPasswordInput.checkValidity()) {
    if (passwordInput.value === confirmPasswordInput.value) {
      // Mật khẩu khớp nhau
    } else {
      // Mật khẩu không khớp nhau
    }
  }
}

passwordInput.addEventListener("input", checkPasswords);
confirmPasswordInput.addEventListener("input", checkPasswords);