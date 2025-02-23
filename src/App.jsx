import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer'
import config from './conf/config'
import { useDispatch } from 'react-redux'
import authobject from './Appwrite/auth'
import { login, logout } from './store/authSlice'
import { Outlet } from 'react-router-dom'

function App() {
  const [Loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    async () => {
       await authobject.getCurrentUser()
        .than((userData) => {
          if (userData) {
            dispatch(login({ userData }))
          }
          else {
            dispatch(logout())
          }
        }).finally(() => {
          setLoading((false))
        })
    }
  } 
    ,)
return(
  
)
 
}

export default App
