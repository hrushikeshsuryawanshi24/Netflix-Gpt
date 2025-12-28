import React from "react";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Header from "./Header";

const LoginForm = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSigninForm(!isSigninForm);
  };
  return (    
    <div className="relative h-screen w-screen">
      <Header />

      {/* Background */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9ddb442a-aca7-4d85-9cd1-dbed62f18f26/web/IN-en-20251222-TRIFECTA-perspective_a882efaa-75c8-4143-9dc1-4f9932a791ac_large.jpg"
        alt="Background"
      />

      {/* Overlay (ONLY for background) */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Login Form */}
      <div className="absolute inset-0 flex justify-center items-center z-20 ">
        <form className="bg-black/60 p-16 rounded-md w-[500px] min-h-[650px] text-white shadow-2xl">
          <h1 className="text-3xl font-bold mb-7">{isSigninForm ? "Sign In" :"Sign Up"}</h1>

          <input
            className="w-full p-4 mb-4 rounded bg-[#333]/30 outline-lime-50"
            placeholder="Email or mobile number"
          />

          <input
            className="w-full p-4 mb-6 rounded bg-[#333]/30 outline-lime-50"
            placeholder="Password"
            type="password"
          />

          {!isSigninForm && <input
            className="w-full p-4 mb-6 rounded bg-[#333]/30 outline-lime-50"
            placeholder="Confirm Password"
            type="password"
          />}

          <button className="w-full bg-red-600 py-3 rounded font-semibold text-lg">
            {isSigninForm ? "Sign In" : "Sign Up"}
          </button>
          {isSigninForm && <h4 className="text-center p-4">OR</h4>}
          {isSigninForm && <button className="w-full bg-gray-600 py-3 rounded font-semibold text-lg mb-4" >
            Use a sign-in code
          </button >}
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
            <p className="p-2 text-gray-400" onClick={toggleSignInForm}>{isSigninForm ? "New to Netflix?" : "Already have an account?"}</p>
            <b className="p-2 cursor-pointer hover:underline" onClick={toggleSignInForm}>{isSigninForm ? "Sign up now." : "Sign in now."}</b>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
