import { useState } from "react";
import LoginID from '../Data/LoginID'
function LoginForm() {

  const [loginID,setLoginID]=useState(LoginID)
  function handleSubmit(e) {
    e.preventDefault();
    
  
  }
  function handleUsername(e) {
    e.stopPropagation();
    setLoginID([e.target.value]='')
  }
  function handlePassword(e) {
    e.stopPropagation();
    setLoginID([e.target.value]='')
    
  }
  return (
    <>
      <div className="w-[90%]m-auto h-[650px] flex">
        <div className="sm:w-[50%] sm:m-auto sm:h-[250px] bg-slate-400 rounded-md xl:[30%] xl:h-[300px]">
          <h3 className="login text-center text-[1.5em] mt-[20px] ">Login</h3>
          <form
            className="flex flex-col items-center mt-[20px] "
            onSubmit={handleSubmit}
            
            
          >
            <input
              type="text"
              className="mb-[6px]  w-[60%] h-[2.2em] pl-[15px]"
              placeholder="Username"
              id="Username"
              onChange={handleUsername}
              name="username"
              required
            />
            <input
              type="Password"
              placeholder="Password"
              className=" w-[60%] h-[2.2em] pl-[15px]"
              id="Password"
              onChange={handlePassword}
              name='password'
              required
            />
            <button
              id="button"
              className=" w-[60%] h-[2.5em] mt-[16px] bg-[#3874bd] text-cyan-50 xl:w-[30%]"
            >
              Login in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
