import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer'

import { useDispatch } from 'react-redux'
import authobject from './Appwrite/auth'
import { login, logout } from './store/authSlice'


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
    <div className="App min-h-screen bg-gray-400 content-between flex flex-wrap">
      <div className='w-full block'>
      <Header/>
  <main>
    
     Todo: {/* {  <Outlet/>} */}
    
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
