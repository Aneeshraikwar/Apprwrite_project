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
  Loading ? (
    <div className="App min-h-screen bg-gray-100 content-between flex">
      <div className='w-full block'>
      <Header/>
  <main>
    
      <h1>TODO</h1> <Outlet/>
    
  </main>
      
      <Footer/>
      </div>
    </div>) : (<div className="App min-h-screen bg-gray-100">
    <header className="App-header min-h-0">
      <h1>ApWright</h1>
      <p>Appwrite + Redux + React</p>
    </header> </div>)
)
 
}

export default App
