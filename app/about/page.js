export default function About() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">About</h1>
  
        <div className="bg-white p-4">
          <p>
            This is a QR code generator and scanner application built with Next.js and Tailwind CSS. It allows you to generate QR codes based on the entered text and scan QR codes by uploading an image.
          </p>
          <p>
            The application utilizes the <a className="text-blue-500" href="https://qrcode.react/">qrcode.react</a> library for generating QR codes and the FileReader API for scanning QR codes from image files.
          </p>
        </div>
      </div>
    );
  }
  