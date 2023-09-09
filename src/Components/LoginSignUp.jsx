import React, { useState } from "react";
import user_icon from "./Assets/person.png";
import pass_icon from "./Assets/password.png";
import email_icon from "./Assets/email.png";
export const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <form>
      <div className="container1 flex flex-col m-auto mt-[200px] bg-[#fff] pb-[30px] w-[600px] rounded-[15px]">
        <div className="header flex flex-col items-center gap-[9px] w-[100%] mt-[30px] text-[#3c009d] ">
          <div className="text text-[#3c009d] text-[48px] font-[700]">
            {action}
          </div>
          <div className="underline1 w-[61px] h-[6px] bg-[#3c009d] rounded-[9px] "></div>
        </div>
        <div className="inputs mt-[55px] flex flex-col gap-[25px]">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className=" flex items-center m-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-[6px]">
              <img
                src={user_icon}
                alt="#"
                className="mt-[0px] mb-[0px] ml-[30px] mr-[30px] "
              />
              <input
                type="text"
                className="h-[50px] w-[400px] bg-transparent outline-none text-[#797979] text-[19px]"
                placeholder="Name"
              />
            </div>
          )}

          <div className="flex items-center m-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-[6px]">
            <img
              src={email_icon}
              alt="#"
              className="mt-[0px] mb-[0px] ml-[30px] mr-[30px] "
            />
            <input
              type="email"
              className="h-[50px] w-[400px] bg-transparent outline-none text-[#797979] text-[19px]"
              placeholder="Email ID"
            />
          </div>
          <div className="flex items-center m-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-[6px]">
            <img
              src={pass_icon}
              alt="#"
              className="mt-[0px] mb-[0px] ml-[30px] mr-[30px] "
            />
            <input
              type="password"
              className="h-[50px] w-[400px] bg-transparent outline-none text-[#797979] text-[19px]"
              placeholder="Password"
            />
          </div>
          {action === "Sign Up" ? (
            <div></div>
          ) : (
            <div className="forgot-password pl-[62px] mt-[27px] text-[#797979] text-[18px]">
              Lost Password?{" "}
              <span className="text-[#4c00b4] cursor-pointer">
                {" "}
                Click Here!
              </span>
            </div>
          )}

          <div className="submit-container flex gap-[30px] mt-[60px] mb-[60px] ml-auto mr-auto">
            <div
              className={
                action === "Sign Up"
                  ? "flex justify-center items-center w-[220px] h-[59px] text-[#fff] bg-[#4c00b4]  rounded-[50px] text-[19px] font-[700] cursor-pointer"
                  : "flex justify-center items-center w-[220px] h-[59px] text-[#676767] bg-[#eaeaea]  rounded-[50px] text-[19px] font-[700] cursor-pointe"
              }
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              Sign Up
            </div>

            <div
              className={
                action === "Login"
                  ? "flex justify-center items-center w-[220px] h-[59px] text-[#fff] bg-[#4c00b4]  rounded-[50px] text-[19px] font-[700] cursor-pointer"
                  : "flex justify-center items-center w-[220px] h-[59px] text-[#676767] bg-[#eaeaea]  rounded-[50px] text-[19px] font-[700] cursor-pointe"
              }
              onClick={() => setAction("Login")}
            >
              Login
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
