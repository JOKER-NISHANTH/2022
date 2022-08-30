const container = document.querySelector(".container"),
  passShoeHide = document.querySelectorAll(".showHidePass"),
  password = document.querySelectorAll(".password"),
  signUp = document.querySelector(".signup-text"),
  login = document.querySelector(".login-text");

//   show and hide password and change icon

passShoeHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    password.forEach((pass) => {
      if (pass.type === "password") {
        pass.type = "text";

        passShoeHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pass.type = "password";
        passShoeHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});
