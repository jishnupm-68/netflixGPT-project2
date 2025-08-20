import Header from "./Header";
import { BG_IMAGE_URL } from "../utils/constant";
import { checkValidData } from "../utils/validate";
import { useRef, useState } from "react";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
 
const Login  =() =>{
    const navigate = useNavigate();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState();
    const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm)

    }
    const email =useRef(null)
    const password = useRef(null);
    const handleButtonClick =()=>{
        // validate the form data
        const message = checkValidData(email?.current?.value, password.current.value);
        setErrorMessage(message)
        if(message) return;
        if(!isSignInForm){
            //signup logic

         createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                navigate("/browser")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+ " - "+errorMessage)
                // ..
            });

        }else{
            //sign in logic

            signInWithEmailAndPassword(auth,  email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate("/browse")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+errorMessage)
                });
        }

    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img 
                src={BG_IMAGE_URL}
                alt="Background image"
                ></img>
                <form 
                className="text-white top-0  absolute  w-4/12  my-40 mx-auto right-0 left-0 bg-  bg-black opacity-80"
                onSubmit={(e)=>e.preventDefault()}>
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
                    ref={email}
                    ></input>
                    <input type="text" 
                    placeholder="password"
                    ref={password}
                    className="  text-white bg-gray-600 mx-16 px-4 my-2 py-2 w-70 rounded-lg"/>
                    <p className="text-red-500 mx-16 px-4 my-1 py-1 font-bold  ">
                        {errorMessage}
                    </p>
                    <button type="button" 
                    className="bg-red-600 mx-16 px-4 my-2 mb-6 py-2 w-70 rounded-lg"
                    onClick={handleButtonClick}>
                        {isSignInForm? "Sign In":"Sign Up"}</button>
                    <p className="mx-16 px-4 my-1 py-1 cursor-pointer" onClick={toggleSignInForm}>
                        {isSignInForm? "New to netflix? signup now":"Already registered, Sign in now"}</p>
                </form>
            </div>
        </div>
    )
}

export default Login