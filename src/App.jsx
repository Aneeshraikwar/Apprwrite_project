
import './App.css'
import config from './conf/config'

function App() {
 
  return (
    <>
     <h1>hello {config.VITE_APWRITE_URL}</h1>
     <h2>confg id : {config.VITE_APWRITE_BUCKET_ID}</h2>
    </>
  )
} 

export default App
