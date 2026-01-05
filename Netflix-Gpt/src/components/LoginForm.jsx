import React from "react";
import { useState, useRef, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import validate from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BackgroundImage } from "./constant";

const LoginForm = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleButtonClick = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const confirmPassword = !isSigninForm
      ? confirmPasswordRef.current.value
      : null;

    const message = validate(email, password, confirmPassword, isSigninForm);
    setErrorMessage(message);

    if (message) return;

    if (!isSigninForm) {
      // SIGN UP
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    } else {
      // SIGN IN
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    }
  };
  useEffect(() => {
    if (user) {
      navigate("/browse");
    }
  }, [user,navigate]);

  const toggleSignInForm = () => {
    setIsSigninForm(!isSigninForm);
  };

  return (
    <div className="relative h-screen w-screen">
      {/* Background */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={BackgroundImage}
        alt="Background"
      />

      {/* Overlay (ONLY for background) */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Login Form */}
      <div className="absolute inset-0 flex justify-center items-center z-20 ">
        <div className="scale-[0.8] origin-top">
          {/* used div tag because of large form size */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="bg-black/60 p-16 rounded-md w-[500px] min-h-[650px] text-white shadow-2xl"
          >
            <h1 className="text-3xl font-bold mb-7">
              {isSigninForm ? "Sign In" : "Sign Up"}
            </h1>

            <input
              ref={emailRef}
              className="w-full p-4 mb-4 rounded bg-[#333]/30 outline-lime-50"
              placeholder="Email or mobile number"
            />

            <input
              ref={passwordRef}
              className="w-full p-4 mb-6 rounded bg-[#333]/30 outline-lime-50"
              placeholder="Password"
              type="password"
            />

            {!isSigninForm && (
              <input
                ref={confirmPasswordRef}
                className="w-full p-4 mb-6 rounded bg-[#333]/30 outline-lime-50"
                placeholder="Confirm Password"
                type="password"
              />
            )}

            {errorMessage && (
              <p className="text-red-500 mb-4">{errorMessage}</p>
            )}

            <button
              className="w-full bg-red-600 py-3 rounded font-semibold text-lg cursor-pointer hover:bg-red-700 mb-6"
              onClick={handleButtonClick}
            >
              {isSigninForm ? "Sign In" : "Sign Up"}
            </button>

            {isSigninForm && <h4 className="text-center p-4">OR</h4>}
            {isSigninForm && (
              <button className="w-full bg-gray-600 py-3 rounded font-semibold text-lg mb-4 courser-pointer hover:bg-gray-700">
                Use a sign-in code
              </button>
            )}
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "#737373",
                    "&.Mui-checked": {
                      color: "#ffffff",
                    },
                  }}
                />
              }
              label="Remember me"
            />
            <div className="flex">
              <p className="p-2 text-gray-400" onClick={toggleSignInForm}>
                {isSigninForm ? "New to Netflix?" : "Already have an account?"}
              </p>
              <b
                className="p-2 cursor-pointer hover:underline"
                onClick={toggleSignInForm}
              >
                {isSigninForm ? "Sign up now." : "Sign in now."}
              </b>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
