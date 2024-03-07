import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import apple from "/src/images/app.png";
import google from "/src/images/goog.png";

const Signup = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = { email: "", password: "" };

    if (!formValues.email) {
      formErrors.email = "Email is required";
    }

    if (!formValues.password) {
      formErrors.password = "Password is required";
    }

    setErrors(formErrors);

    if (!formErrors.email && !formErrors.password) {
      console.log("Form submitted successfully:", formValues);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full flex flex-col md:flex-row md:flex p-3">
        <div className="w-full  md:w-1/2 ">
          <div className="text-8xl md:text-9xl">Sign up to enter</div>
          {/* <div className="text-sm font-aeonic mt-10  ">
            Don't have an account?
            <span className="underline">
              <Link to="/signup">Create one</Link>
            </span>
          </div> */}
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex justify-center lg:flex lg:justify-start space-x-10 mt-10">
            <Link
              className="font-aeonic text-xl text-primary bg-bg border border-solid py-2 px-5 rounded-full"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="font-aeonic text-xl text-bg bg-primary   py-2 px-5 rounded-full"
              to="/signup"
            >
              Sign up
            </Link>
          </div>
          <div className="mt-10">
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center  ">
                <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-8 space-y-8 lg:space-y-0 lg:justify-between">
                  <div>
                    <input
                      className="bg-bg p-2 px-3 font-aeonic border-b focus:outline-none w-[17rem]"
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                    <div className="text-[red] text-sm">
                      {errors.email && <div>{errors.email}</div>}
                    </div>
                  </div>
                  <div>
                    <input
                      className="bg-bg p-2 px-3 font-aeonic border-b focus:outline-none w-[17rem]"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={formValues.password}
                      onChange={handleChange}
                    />
                    <div className="text-[red] text-sm">
                      {errors.password && <div>{errors.password}</div>}
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex items-center mt-5">
                <div class="flex-1 h-0.5 "></div>
                <div class="mx-4 text-[grey] font-aeonic">or</div>
                <div class="flex-1 h-0.5 "></div>
              </div>

              <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-8 justify-center lg:space-x-8 lg:mt-5 mt-5 ">
                <div className="flex justify-center lg:justify-start">
                  <button className="w-[17rem] text-bg bg-primary border border-solid rounded-full p-2 px-3 flex flex-row justify-center items-center gap-3">
                    <img className="w-4" src={apple} alt="" /> Signup with apple
                    ID
                  </button>
                </div>
                <div className="flex justify-center ">
                  <button className="w-[17rem] text-primary bg-bg border border-solid rounded-full p-2 px-3 flex flex-row justify-center items-center gap-3">
                    {" "}
                    <img className="w-4" src={google} alt="" /> Signup with
                    google
                  </button>
                </div>
              </div>
              <div className="text-center mt-5">
                You accept the terms and conditions by clicking sign up{" "}
              </div>

              <div className="flex justify-center lg:justify-end mt-10">
                <button className="bg-primary text-bg font-aeonic text-xl px-20 py-1 rounded-full ">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
