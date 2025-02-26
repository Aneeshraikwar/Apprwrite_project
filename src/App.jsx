import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import {Header,Footer} from './components/index'
import { useDispatch } from 'react-redux'
import authobject from './Appwrite/auth'
import { login, logout } from './store/authSlice'


function App() {
  const [Loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
   const fetchUser= async () => {
      console.log('async')  
      await authobject.getCurrentUser().then((userData) => {
          console.log('userdata')
          if (userData) {
            dispatch(login({ userData }))
          }
          else {
            dispatch(logout())
            console.log('else')
          }
        }).catch((error) => {
          console.log(error)
         })
        .finally(() => {
          setLoading(false)
          console.log('finally')
        })
      }
    fetchUser() // calling the async function
  },[ dispatch])
  return !Loading ? (
    <div className="min-h-screen bg-gray-400 content-between flex flex-wrap">
      <div className='w-full block'>
        <Header />
        <main>
          Todo: {/* {  <Outlet/>} */}
        </main>
        <Footer />
      </div>
    </div>) : null ;

}

export default App
