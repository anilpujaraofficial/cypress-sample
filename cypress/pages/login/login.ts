class LoginPage {
  form() {
    return {
      username: "#username",
      password: "#password",
    };
  }
  button() {
    return {
      submit: "button[type='submit']",
    };
  }

  alert() {
    return {
      login_success: "Login Successfully !",
    };
  }
  form_validation() {
    return {
      xpath: "",
      username_password_invalid: "Invalid username or password",
    };
  }
}
export default LoginPage;
