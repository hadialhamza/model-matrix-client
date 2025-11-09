import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import Loading from "../../Loading/Loading";

const Login = () => {
  const { user, googleLogin, loading } = useAuth();

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

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container min-h-[90vh] mt-10">
      <div className="max-w-md mx-auto bg-base-300 rounded-box shadow-xl p-5">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
          {/* Google */}
          <button
            onClick={handleGoogleLogin}
            className="btn bg-white text-black border-[#e5e5e5] mt-4"
          >
            <FcGoogle size={19} />
            Login with Google
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
