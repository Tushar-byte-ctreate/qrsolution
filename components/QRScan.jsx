'use client'
import React, { useState ,useRef} from 'react';
import { QrReader } from 'react-qr-reader';
import {FaNoteSticky} from 'react-icons/fa6'

export default function QrCodeScanner() {
  const [scannedValue, setScannedValue] = useState('');
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [data, setData] = useState('No result');
  const textRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    if (textRef.current) {
      const range = document.createRange();
      range.selectNode(textRef.current);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };
//   const handleScan = (result) => {
//     if (result) {
//       setScannedValue(result.text);
//     }
//ml   };

//   const handleScanError = (error) => {
//     console.error(error);
//   };
const handleDecode = (result) => {
  console.log(result);
} 

const handleScannerLoad = (mode) => {
  console.log(mode);
}

  const toggleCamera = () => {
    setIsCameraActive(!isCameraActive);
  };
// const html5 = new Html5QrcodeScanner('reader',{
//     fps: 10, qrbox: {width: 250, height: 250}
// })
  return (
    <>
    <div className="flex flex-col justify-center items-center">
    <h2 className='text-2xl font-bold m-1'>Scan The QR Code </h2>
    {isCameraActive ? ( <> <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        className='w-96'
      />
       <div className= ' w-80 md:overflow-auto relative justify-between items-center  m-2 flex md:w-auto w-max-96 h-auto h-min-12  bg-slate-300 border border-purple-500'>  <p ref={textRef} className='m-1 w-max-96 h-auto overflow-auto'>{data} </p> <span onClick={copyToClipboard} className='m-1 text-purple-700 cursor-pointer '> <FaNoteSticky/></span> {isCopied && <p className='absolute top-2 right-7 bg-green-200 px-5 py-3 border border-green-600'>Text has been copied!</p>}</div></>
      ):(
          <div className="text-center p-1">
            <p>Click the button below to activate the camera and scan QR codes.</p>
          </div>
        )}
        <div className="flex justify-center mb-4">
        <button
          onClick={toggleCamera}
          className={`bg-purple-500 w-60  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            isCameraActive ? 'bg-red-500' : ''
          }`}
        >
          {isCameraActive ? 'Stop Scanning' : 'Scan via Camera'}
        </button>
      </div>
    
     
     
    </div>
      
    </>
  );
}

{/* <h1 className="text-2xl font-bold mb-4">QR Code Scanner</h1>
      <div className="mb-4">
        {isCameraActive ? (
          <Webcam
            className="w-full"
            width={640}
            height={480}
            onScan={handleScan}
            onScanError={handleScanError}
          />
        ) : (
          <div className="text-center">
            <p>Click the button below to activate the camera and scan QR codes.</p>
          </div>
        )}
      </div>
      <div className="flex justify-center mb-4">
        <button
          onClick={toggleCamera}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            isCameraActive ? 'bg-red-500' : ''
          }`}
        >
          {isCameraActive ? 'Stop Scanning' : 'Scan via Camera'}
        </button>
      </div>
      {scannedValue && (
        <div className="text-center">
          <p>Scanned Value: {scannedValue}</p>
        </div>
      )} */}