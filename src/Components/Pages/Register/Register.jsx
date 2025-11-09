import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import Loading from "../../Loading/Loading";

const Register = () => {
  const { user, googleLogin, loading } = useAuth();

  // Google login handler
  const handleGoogleLogin = () => {
    if (!user) {
      googleLogin();
    } else {
      return Swal.fire({
        title: "Already logged in",
        timer: 1500,
      });
    }
  };

  // User registration handler
  const handleUserRegistration = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;
    const password = e.target.password.value;

    const userData = { name, email, photoUrl, password };
    console.log(userData);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container min-h-[90vh] mt-10">
      <div className="max-w-md mx-auto bg-base-300 rounded-box shadow-xl p-5">
        <form onSubmit={handleUserRegistration}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              name="name"
              placeholder="Enter Your Name"
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full"
              name="email"
              placeholder="Enter Your Email"
            />
            <label className="label">Photo</label>
            <input
              type="text"
              className="input w-full"
              name="photoUrl"
              placeholder="Enter Photo URL"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full"
              name="password"
              placeholder="Email"
            />
            <label className="label">Confirm Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
              name="confirmPassword"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral text-base mt-4">Register</button>
          </fieldset>
        </form>
        {/* Google */}
        <button
          onClick={handleGoogleLogin}
          className="btn bg-white text-black border-[#e5e5e5] mt-4 w-full"
        >
          <FcGoogle size={19} />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
