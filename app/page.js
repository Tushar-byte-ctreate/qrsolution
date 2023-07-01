'use client'
import { useState } from 'react';
import QRCode from 'qrcode';

import QR from '@/components/QR'
import QRScan from '@/components/QRScan'
export default function Page() {
  const [text, setText] = useState('');
  const [qrCodeData, setQRCodeData] = useState('');
  const [scannedText, setScannedText] = useState('');

  

  return (
    <div className="w-full h-auto min-h-screen">
      
   <QR/>
   <QRScan/>

    
    </div>
  );
}
