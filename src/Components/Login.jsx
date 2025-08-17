import Header from "./Header";
import { BG_IMAGE_URL } from "../utils/constant";
import { useState } from "react";

const Login  =() =>{
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm)

    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img 
                src={BG_IMAGE_URL}
                alt="Background image"
                ></img>
                <form className="text-white top-0  absolute  w-4/12  my-40 mx-auto right-0 left-0 bg-  bg-black opacity-80">
                    <h1 className=" font-3xl mx-16  my-4 ">
                       {isSignInForm? "Sign In":"Sign Up"}
                    </h1>
                    {!isSignInForm &&  <input  className="text-white bg-gray-600 mx-16 px-4 my-2 py-2 w-70 rounded-lg"
                    placeholder="Full Name"
                    type="text"
                    ></input>}
                    <input  className="text-white bg-gray-600 mx-16 px-4 my-2 py-2 w-70 rounded-lg"
                    placeholder="Email address"
                    type="email"
                    ></input>
                    <input type="text" 
                    placeholder="password"
                    className="  text-white bg-gray-600 mx-16 px-4 my-2 py-2 w-70 rounded-lg"/>
                    <button type="button" className="bg-red-600 mx-16 px-4 my-2 mb-6 py-2 w-70 rounded-lg">
                        {isSignInForm? "Sign In":"Sign Up"}</button>
                    <p className="mx-16 px-4 my-1 py-1 cursor-pointer" onClick={toggleSignInForm}>
                        {isSignInForm? "New to netflix? signup now":"Already registered, Sign in now"}</p>
                </form>
            </div>
        </div>
    )
}

export default Login