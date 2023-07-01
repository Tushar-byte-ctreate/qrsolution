"use client"
import { useState } from "react";
import {Html5QrcodeScanner} from "html5-qrcode";



const Test = ()=>{

  const [ resulted , setResulted] = useState('')
  const scanner = new Html5QrcodeScanner( 'reader',{
    qrbox:{
width:250,
height:250
    }
    ,
    fps: 5,
  })
scanner.render(success, error)

  function success (result) {
    scanner.clear()
    setResulted(result)
  }
  function error (result) {
    console.log(result)
  }
  return(<>

    <div id="reader" width="600px"></div>
    <p>{resulted}</p>
  </>)
}

export default Test