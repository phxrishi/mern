import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Aos from 'aos'
import graph from './graph'

const App = () => {

  useEffect(()=>{
    Aos.init()
  }, [])
  return (
    <>
    <div data-aos="fade-right" className="row div_height mx-5 my-3 p-5 bg-danger"></div>
    <div  data-aos="fade-left"className="row div_height mx-5 my-3 p-5 bg-success"></div>
    <div data-aos="fade-down-right" className="row div_height mx-5 my-3 p-5 bg-dark"></div>
    
    <div data-aos="flip-left" className="row div_height mx-5 my-3 p-5 bg-secondary"></div>
    <div  data-aos="zoom-in" className="row div_height mx-5 my-3 p-5 bg-primary"></div>
    <div data-aos="fade-right" className="row div_height mx-5 my-3 p-5 bg-success"></div>
    <div data-aos="fade-left" className="row div_height mx-5 my-3 p-5 bg-warning"></div>
    <div data-aos="fade-down-left" className="row div_height mx-5 my-3 p-5 bg-info"></div>
    </>

   
  )
}

export default App