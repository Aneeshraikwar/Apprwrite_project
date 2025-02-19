import { useState ,useEffect} from 'react'
import './App.css'
import config from './conf/config'
import { useDispatch } from 'react-redux'
import authService from './Appwrite/auth'


function App() {
const [Loading,setLoading]= useState(true)
const dispatch = useDispatch()
  return (
    <>
     <h1>hello {config.VITE_APWRITE_URL}</h1>
     <h2>confg id : {config.VITE_APWRITE_BUCKET_ID}</h2>
    </>
  )
} 

export default App
