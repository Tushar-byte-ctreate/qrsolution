'use client'
import  { useState } from 'react';
import QRCode from 'qrcode';
import Image from 'next/image';

export default function QrCodeGenerator() {
  const [inputValue, setInputValue] = useState('');
  const [qrCodeValue, setQrCodeValue] = useState('');
  const [errorMsg , setErrorMsg] = useState('');

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setInputValue(event.target.value);
  };

  const handleGenerateQRCode = () => {
if(!inputValue ){
    setErrorMsg("Please enter Text or Url")
}else{
    const generateQRCode = async () => {
  
        const qrCode = await QRCode.toDataURL(inputValue);
        console.log(qrCode);
       setQrCodeValue(qrCode)
       setInputValue('')
      
    };
    generateQRCode()
}
   
  };

  const handleDownloadQRCode = () => {
    const url = qrCodeValue;
    const link = document.createElement('a');
    link.href = url;
    link.download = 'qrcode.png';
    link.click();
  };

  return (
    <div className="container mx-auto flex flex-col justify-center items-center p-4">
      <h1 className="text-2xl font-bold mb-4">QR Code Generator</h1>
      {errorMsg &&  (<p className="bg-red-300 border border-red-600 text-black px-5 py-3 m-2">{errorMsg} <span onClick={()=> setErrorMsg('')} className='text-red-700 font-bold p-1'>X</span></p>)}
    
      <div className="flex flex-col justify-center items-center w-full mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter text or URL"
          style={{width: '100%', height: '',outlineColor:'purple'}}
          className="mr-2  p-2 border border-gray-300 flex-grow "
        />
       {qrCodeValue && (
        <div className="text-center">
          <img width={300} height={300 } alt="qr" src={qrCodeValue}  />
          <p className="mt-2">Scan the QR Code above.</p>
        </div>
      )}
        <button
          onClick={handleGenerateQRCode}
          className=" w-60 m-4 bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Generate QR Code
        </button>
        {qrCodeValue && (
          <button
            onClick={handleDownloadQRCode}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Download QR Code
          </button>
          
        )}
      </div>
      
    </div>
  );
}
