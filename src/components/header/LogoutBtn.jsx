import React from 'react'
import { useDispatch } from 'react-redux'
import authobject from '../../Appwrite/auth'
import { logout } from '../../store/authSlice'


function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler=()=>{
        authobject.logOutUser()
        .then((res)=>{
            dispatch(logout())
        })


    }
  return (
    <button>LogoutBtn</button>
  )
}

export default LogoutBtn