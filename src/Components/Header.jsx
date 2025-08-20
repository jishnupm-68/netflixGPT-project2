import  {useEffect} from 'react'
import { LOGO } from '../utils/constant'
import { AiFillGitlab } from "react-icons/ai";
import { auth } from '../utils/firebase'; 
import {  signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice"
const Header = () => {
  const navigate = useNavigate()
  const user= useSelector((store=>store.user))
  const dispatch = useDispatch();

   useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid , email, displayName} = user;
    dispatch(addUser({uid:uid, displayName:displayName, email:email}))
    navigate("/browse")
    // ...
  } else {
    // User is signed out
    // ...
    dispatch(removeUser())
    navigate('/')

  }
  //unsubscribe when component unmount
  return (()=>unSubscribe())
});

  },[])

  const handleSignOut =()=>{
    signOut(auth).then(() => {
      navigate('/');
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.log(error?.code +"-"+error?.message)
      navigate('/error')
    });

  }
  return (
    <div  className=' px-5 py-3 bg-gradient-to-b from-black z-200 w-full  flex justify-between fixed '>
      <img
      className='w-26'
      src ={LOGO}
      alt ="logo"
       />
       {user &&
       <div className='p-4'>
        <AiFillGitlab className='' />
        <button className='bg-red-400 font-bold text-white px-2 py-1'onClick={handleSignOut} >Sign out</button>
       </div>}
    </div>
  )
}

export default Header
