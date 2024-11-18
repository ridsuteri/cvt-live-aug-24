import React,{useContext, useEffect} from 'react'
import Login from  '../pages/Login'
import {AuthContext} from '../context/AuthContext'
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const navigate = useNavigate();
  let {loggedInUser} = useContext(AuthContext)
 
  useEffect(()=>{
    !Object.keys(loggedInUser).length && navigate('/login',{state:{"message":"redirected by privateRoute.jsx"}})
  },[])

  return (
    <div>
       {children}
    </div>
  )
}

export default PrivateRoute