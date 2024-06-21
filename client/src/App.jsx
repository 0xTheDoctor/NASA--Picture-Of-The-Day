import './App.css'
import Main from './Components/Main'
import SideBar from './Components/SideBar'
import Footer from './Components/Footer'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData]= useState(null)
  //const[loading, setLoading]=useState(false)
  const[showModal,setShowModal]= useState(false)

  function handleToggleModal(){
    setShowModal(!showModal)
  }

  useEffect(()=>{
    async function fetchApiData(){
      // const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      // console.log("nasa key is",NASA_KEY) 
      const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
      try{
        const res=await fetch(url)
        const apiData=await res.json()
        setData(apiData)
        console.log('DATA\n',apiData)
      }
      catch(err){
        console.log(err.message)
      }
    }
    fetchApiData()
  },[])

  return (
    <>
      
      {data?(<Main data={data}/>): (
        <div className='loadingState'>
          <i className="fa-solid fa-spinner"></i>
        </div>
      )}
      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal}> 
        </SideBar>)}
      {data &&(<Footer data={data} handleToggleModal={handleToggleModal}/>)}
    </>
  )
}

export default App
