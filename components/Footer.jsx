

const Footer = ()=>{
    const currentYear = new Date().getFullYear()
    return(
<div className="w-full h-40 flex justify-center items-center bg-purple-600 text-white">
   <div className=" flex flex-col  justify-center items-center">
    <h3 className="text-2xl font-bold">QR Solutions</h3>
    <p> © copyright {currentYear}</p>
   </div>
</div>
    )
}

export default Footer 