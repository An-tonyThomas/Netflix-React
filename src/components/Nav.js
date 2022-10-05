import { useEffect, useState } from 'react'
import './Nav.css'
import React from 'react'

function Nav() {
    const[show,setShow]=useState(false)
    useEffect(()=>{
       window.addEventListener("scroll",()=>{
        if(window.scrollY>100){
            setShow(true)
        }
        else{
            setShow(false)
        }
    }) 
    },[])
    console.log(show);
  return (
    <div className={`nav ${show && "black_nav"}`}>
        <img src='https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456'></img>
    </div>
  )
}

export default Nav