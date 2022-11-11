/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styleLg from "./form.module.css";
import styleSm from "./formSm.module.css";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import Loading from "../Share/Loading/Loading";
import { async } from "@firebase/util";
import { toast } from "react-toastify";
import { BsFacebook } from "react-icons/bs";
import { IoLogoGoogle } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import useToken from "../Hooks/useToken";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const errorMssg = (error = "") => {
  return error ? error?.code?.split("/")[1].split("-").join(" ") : "";
};

const Form = () => {
  const location = useLocation();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  if (user) {
    navigate(location?.state?.from?.pathname || "/");
  }
  const [activePanel, setActivePanel] = useState("right-panel-active");

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [signInWithFacebook, facebookUser, FacebookLoading, FacebookError] =
    useSignInWithFacebook(auth);

  // sign Up funcitonality below
  const [
    createUserWithEmailAndPassword,
    signUpUser,
    signUpLoading,
    signUpError,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  // sign In funcitonality below
  const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] =
    useSignInWithEmailAndPassword(auth);

  const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

  const signUp = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(
      e.target.email.value,
      e.target.pass.value
    );
    await updateProfile({ displayName: e.target.name.value });

    // // for name send backend
    const email = e.target.email.value;
    // console.log(signUpUser);
    const currentUser = {
      displayName: e.target.name.value,
      email: email,
    };

    await fetch(
      `https://eventy-serversite-production.up.railway.app/user/${email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `authHeader ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(currentUser),
      }
    )
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.acknowledged) {
          toast.success("Successfully Sign In");
        }
      });

    e.target.reset();
  };

  const [token] = useToken(
    signUpUser || signInUser || googleUser || facebookUser
  );
  if (token) {
    navigate(location?.state?.from?.pathname || "/");
  }

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(e.target.email.value, e.target.pass.value);
    signInUser && toast.success("Successfully Sign In");

    e.target.reset();
  };

  return (
    <section className={`${styleLg.bg}`}>
      {(signInLoading || signUpLoading || googleLoading || FacebookLoading) && (
        <Loading />
      )}
      <div
        className={`min-h-[calc(100vh-126px)] flex justify-center items-center px-3 route`}
      >
        {/* for large device */}
        <div className={`${styleLg.container} ${activePanel} hidden sm:block`}>
          {/* for sign up */}
          <div
            className={`${styleLg.formContainer} ${styleLg.signUpContainer}`}
          >
            <form
              onSubmit={signUp}
              className={`${styleLg.form} space-y-3`}
              action="#"
            >
              <h1 className={styleLg.h1}>Create Account</h1>
              <div
                className={`${styleLg.socialContainer} space-x-5 flex items-center`}
              >
                <button
                  className={`${styleLg.social}`}
                  onClick={() => signInWithGoogle()}
                >
                  <FcGoogle className="text-4xl" />
                </button>
                <button
                  className={`${styleLg.social}`}
                  onClick={() => signInWithFacebook()}
                >
                  <BsFacebook className="text-3xl text-sky-700" />
                </button>
              </div>
              <span className={`${styleLg.span} font-semibold`}>
                or use your email for registration
              </span>
              <input
                required
                className={styleLg.input}
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                required
                className={styleLg.input}
                type="email"
                placeholder="Email"
                name="email"
              />
              <input
                required
                className={styleLg.input}
                type="password"
                placeholder="Password"
                name="pass"
              />
              <div className="h-3 self-start">
                {signUpError && (
                  <h6 className="text-red-600 text-[5px] uppercase">
                    {errorMssg(signUpError)}
                  </h6>
                )}
                {googleError && (
                  <h6 className="text-red-600 text-[5px] uppercase">
                    {errorMssg(googleError)}
                  </h6>
                )}
                {FacebookError && (
                  <h6 className="text-red-600 text-[5px] uppercase">
                    {errorMssg(FacebookError)}
                  </h6>
                )}
              </div>
              <input
                required
                type="submit"
                className={styleLg.button}
                value="Sign Up"
              />
            </form>
          </div>

          {/* for sign in /  login */}
          <div
            className={`${styleLg.formContainer} ${styleLg.signInContainer}`}
          >
            <form
              onSubmit={signIn}
              className={`${styleLg.form} space-y-3`}
              action="#"
            >
              <h1 className={styleLg.h1}>Sign in</h1>
              <div
                className={`${styleLg.socialContainer} space-x-5 flex items-center`}
              >
                <button
                  className={`${styleLg.social}`}
                  onClick={() => signInWithGoogle()}
                >
                  <FcGoogle className="text-4xl" />
                </button>
                <button
                  className={`${styleLg.social}`}
                  onClick={() => signInWithFacebook()}
                >
                  <BsFacebook className="text-3xl text-sky-700" />
                </button>
              </div>
              <span className={`${styleLg.span} font-semibold`}>
                or use your account
              </span>
              <input
                required
                className={styleLg.input}
                type="email"
                placeholder="Email"
                name="email"
              />
              <input
                required
                className={styleLg.input}
                type="password"
                placeholder="Password"
                name="pass"
              />
              <div className="h-3 self-start">
                {signUpError && (
                  <h6 className="text-red-600 text-[5px] uppercase">
                    {errorMssg(signUpError)}
                  </h6>
                )}
                {googleError && (
                  <h6 className="text-red-600 text-[5px] uppercase">
                    {errorMssg(googleError)}
                  </h6>
                )}
                {FacebookError && (
                  <h6 className="text-red-600 text-[5px] uppercase">
                    {errorMssg(FacebookError)}
                  </h6>
                )}
              </div>
              <button className={`${styleLg.a} font-semibold`} href=" ">
                Forgot your password?
              </button>
              <input
                required
                type="submit"
                className={styleLg.button}
                value="Sign In"
              />
            </form>
          </div>

          <div className={`${styleLg.overlayContainer}`}>
            <div className={`${styleLg.overlay}`}>
              <div
                className={`${styleLg.overlayPanel} ${styleLg.overlayLeft} space-y-5`}
              >
                <h1 className={`font-bold text-white text-2xl`}>
                  Welcome Back!
                </h1>
                <p className={`text-xs font-bold`}>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className={`${styleLg.ghost} ${styleLg.button} bg-gradient-to-r from-rose-700 to-red-500`}
                  id="signIn"
                  onClick={() => {
                    setActivePanel(" ");
                  }}
                >
                  Sign In
                </button>
              </div>
              <div
                className={`${styleLg.overlayPanel} ${styleLg.overlayRight} space-y-5`}
              >
                <h1 className={`font-bold text-white text-2xl`}>Hello, User</h1>
                <p className={`text-xs font-bold`}>
                  Enter your personal details and start journey with us
                </p>
                <button
                  className={`${styleLg.ghost} ${styleLg.button} bg-gradient-to-r from-rose-700 to-red-500`}
                  id="signUp"
                  onClick={() => {
                    setActivePanel(styleLg.rightPanelActive);
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* for small device */}
        <div class={`${styleSm.main} sm:hidden`}>
          <input
            required
            className={styleSm.chk}
            type="checkbox"
            id="chk"
            aria-hidden="true"
          />

          {/* for sign up */}
          <div className={`${styleSm.signup}`}>
            <form className="" onSubmit={signUp}>
              <label
                className={`${styleSm.label}`}
                for="chk"
                aria-hidden="true"
              >
                Sign up
              </label>
              <div className={`space-x-5 my-3 flex justify-center`}>
                <button
                  className={`${styleSm.social}`}
                  onClick={() => signInWithGoogle()}
                >
                  <IoLogoGoogle className="text-[2rem] text-gray-900" />
                </button>
                <button
                  className={`${styleSm.social}`}
                  onClick={() => signInWithFacebook()}
                >
                  <BsFacebook className="text-3xl text-gray-900" />
                </button>
              </div>
              <input
                required
                className={`${styleSm.input}`}
                type="text"
                name="name"
                placeholder="User name"
              />
              <input
                required
                className={`${styleSm.input}`}
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                required
                className={`${styleSm.input}`}
                type="password"
                name="pass"
                placeholder="Password"
              />
              <div className="h-3 text-center">
                {signUpError && (
                  <h6 className="text-red-600 text-[5px] uppercase">
                    {errorMssg(signUpError)}
                  </h6>
                )}
                {googleError && (
                  <h6 className="text-red-600 text-[5px] uppercase">
                    {errorMssg(googleError)}
                  </h6>
                )}
                {FacebookError && (
                  <h6 className="text-red-600 text-[5px] uppercase">
                    {errorMssg(FacebookError)}
                  </h6>
                )}
              </div>
              <input
                type="submit"
                className={`${styleSm.button}`}
                value="Sign Up"
              />
            </form>
          </div>

          {/* for login/ sign in */}
          <div className={`${styleSm.login}`}>
            <form className="" onSubmit={signIn}>
              <label
                className={`${styleSm.label}`}
                for="chk"
                aria-hidden="true"
              >
                Login
              </label>
              <div className={`space-x-5 my-3 flex justify-center`}>
                <button
                  className={`${styleSm.social}`}
                  onClick={() => signInWithGoogle()}
                >
                  <FcGoogle className="text-[2rem]" />
                </button>
                <button
                  className={`${styleSm.social}`}
                  onClick={() => signInWithFacebook()}
                >
                  <BsFacebook className="text-3xl text-sky-700" />
                </button>
              </div>
              <input
                required
                className={`${styleSm.input}`}
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                required
                className={`${styleSm.input}`}
                type="password"
                name="pass"
                placeholder="Password"
              />
              <div className="h-3 text-center">
                {signInError && (
                  <h6 className="text-red-600 text-[5px] uppercase">
                    {errorMssg(signInError)}
                  </h6>
                )}
                {googleError && (
                  <h6 className="text-red-600 text-[5px] uppercase">
                    {errorMssg(googleError)}
                  </h6>
                )}
                {FacebookError && (
                  <h6 className="text-red-600 text-[5px] uppercase">
                    {errorMssg(FacebookError)}
                  </h6>
                )}
              </div>
              <input
                type="submit"
                className={`${styleSm.button} bg-gradient-to-r from-[#ff4b2beb] to-orange-400`}
                value="Sign In"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
