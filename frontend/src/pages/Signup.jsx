
import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <div className="flex mt-5 justify-center align-middle  dark:bg-white dark:shadow-emerald-950">
            <div className="modal-box dark:text-white dark:bg-slate-900 text-black bg-white  ">
                <h3 className="font-bold text-lg mb-5">Signup</h3>
                <div>
                    <label>
                        <span>name</span><br />
                        <input type="text" placeholder="Enter your name" className="w-100 outline-none dark:text-white dark:bg-slate-900 " />
                    </label><br /><br />
                    <label>
                        <span>Email</span><br />
                        <input type="email" placeholder="Enter your email" className="w-100 outline-none  dark:text-white dark:bg-slate-900" />
                    </label><br /><br />
                    <label>
                        <span>Password</span><br />
                        <input type="password" placeholder="Enter your password" className="w-100 outline-none dark:text-white dark:bg-slate-900 " />
                    </label><br />
                </div>
                <div>
                    <div className="flex  mt-6">
                        <button onClick={()=>alert("Login functionality is not available right now")} className="bg-pink-600  px-4 py-2 text-white rounded-md hover:bg-pink-700 duration-200 ease-in-out">
                            Signup
                        </button>
                    </div>
                </div>
                <div className="flex">
                <Link to="/">
                <span className="font-medium">Already registered?</span>
                    <button className="bg-blue-600 text-white px-4 mx-2 py-2 rounded-md hover:bg-blue-700 duration-300 ease-in-out mt-5">
                        Back to home page
                    </button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Signup

