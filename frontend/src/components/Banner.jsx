import React from 'react'

function Banner() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row ">
                <div className="w-full md:w-1/2 mt-10 md:mt-40 order-2 md:order-1">
                    <div className="space-y-11">
                        <h1 className="text-4xl font-semibold">Welcome to your ultimate resource for PYQs
                        <span className="text-pink-600">-prepare smarter every day!!!</span></h1>
                        <p className= "text-xl">Welcome to PYQStore, your go-to platform for accessing previous year question papers. Enhance your exam preparation with our extensive resources, study tips, and user-friendly navigation. Start learning smarter today!</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 order-1 ">
                <img src="books.png" alt="" className="w-92 h-92 " />
                </div>
            </div>
            
        </>
    )
}

export default Banner
