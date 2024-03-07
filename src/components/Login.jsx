import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Login = () => {
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
          <div className="text-8xl md:text-9xl">Login to enter</div>
          <div className="text-sm font-aeonic mt-10">
            Don't have an account?
            <span className="underline">
              <Link to="/signup">Create one</Link>
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex justify-center lg:flex lg:justify-start space-x-10 mt-10">
            <Link
              className="font-aeonic text-xl text-bg bg-primary py-2 px-5 rounded-full"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="font-aeonic text-xl text-primary bg-bg border border-solid  py-2 px-5 rounded-full"
              to="/signup"
            >
              Sign up
            </Link>
          </div>
          <div className="mt-10">
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center lg:justify-between ">
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
              <div className="text-sm flex justify-center lg:justify-start font-aeonic mt-10 ">
                Forget your login details?{" "}
                <span className="underline cursor-pointer">Get help</span>
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

export default Login;
