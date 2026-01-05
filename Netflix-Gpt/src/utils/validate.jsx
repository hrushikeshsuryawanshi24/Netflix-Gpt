const validate = (email, password, confirmPassword, isSigninForm) => {
  const isEmailValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(password);

  if (!isEmailValid) return "Email Id is invalid";
  if (!isPasswordValid) return "Password is invalid";

  // 🔥 Sign Up only validations
  if (!isSigninForm) {
    if (!confirmPassword) return "Confirm Password is required";
    if (password !== confirmPassword)
      return "Password and Confirm Password do not match";
  }

  return null;
};

export default validate;
