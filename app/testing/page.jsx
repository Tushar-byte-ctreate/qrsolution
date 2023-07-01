'use client'
import React, { useRef, useEffect } from 'react';

function CameraComponent() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((error) => {
          console.error('Error accessing camera:', error);
        });
    }
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay></video>
    </div>
  );
}

export default CameraComponent;
