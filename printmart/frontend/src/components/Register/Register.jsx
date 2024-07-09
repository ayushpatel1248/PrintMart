import logo from "../../images/logo.png";
import { Navigate } from "react-router-dom";
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { object, string, number, date, InferType } from 'yup';
import * as yup from 'yup';
import axios, { Axios } from 'axios';


const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function Register() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contactPhoneNumber, setMobileNumber] = useState("");
  const notify = (notifyMessage) => toast(notifyMessage);

  let userSchema = object({
    userName: string().min(4).max(40).required(),
    email: string().email("Invalid email").required("Email is required"),
    contactPhoneNumber: string()
      .matches(/^[0-9]{10}$/, "Invalid mobile number")
      .required("Mobile number is required"),
    password: string()
      .min(4)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain capital, small letter, special character, and number"
      )
      .required("Password is required"),
  });

  const handleRegister = async (ev) => {
    ev.preventDefault();
    console.log("we are here in register handler");
    try {
      const validatedInfo = await userSchema.validate({
        userName,
        email,
        contactPhoneNumber,
        password,
      });

      const apiFetched = await axios.post(`${BASE_URL}/register`, {
        username: userName,
        email,
        contactPhoneNumber,
        password,
      });
      console.log("api answer = ", apiFetched);
      console.log(apiFetched.data.data);
      if (apiFetched.data.status == "OK" || apiFetched.data.status == "ok") {
        localStorage.setItem(
          "authorization",
          apiFetched.data.data.authorization
        );
        notify(apiFetched.data.msg);
        navigate("/");
      } else {
        notify(apiFetched.data.msg);
      }
    } catch (err) {
      notify(err.message);
    }
  };

  return (
    <div className="">
      <div className="flex min-h-full flex-1 flex-col justify-center mx-auto mt-24 px-2 py-12 w-4/5 lg:w-1/3 lg:px-2 border-2 bg-[#f1f5f9] rounded">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/">
            <img className="mx-auto h-6 w-auto" src={logo} alt="Your Company" />
          </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register Yourself
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={(e)=>handleRegister(e)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                User Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  onChange={(e) => setUserName(e.target.value)}
                  name="name"
                  type=""
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                College Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  onChange={(e) => setEmail(e.target.value)} 
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="number"
                  onChange={(e) => setMobileNumber(e.target.value)}
                  name="number"
                  type="number"
                  autoComplete="number"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Create Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => setPassword(e.target.value)} 
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign In Now
            </Link>
          </p>
        </div>
      </div>     
      <ToastContainer />
    </div>
  );
}
