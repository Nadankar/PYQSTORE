
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {

    return (
        <div>

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box dark:text-white dark:bg-slate-900 text-black bg-white">
                    <h3 className="font-bold text-lg mb-5">Login!</h3>
                    <div>
                        <label>
                            <span>Email</span><br />
                            <input type="email" placeholder="Enter your email" className="w-100 outline-none dark:text-white dark:bg-slate-900" />
                        </label><br /><br />
                        <label>
                            <span>Password</span><br />
                            <input type="password" placeholder="Enter your password" className="w-100 outline-none dark:text-white dark:bg-slate-900" />
                        </label><br />
                    </div>
                    {/* Button */}
                    <div className="flex justify-around mt-6">
                            <button onClick={()=>alert("Login functionality is not available right now")} className="bg-pink-600 px-4 py-2 text-white rounded-md hover:bg-pink-700 duration-200 ease-in-out">
                            Login
                        </button>
                    
                        
                        <div className="my-2">
                            <span>Not registered?</span>
                            <Link to="/signup"
                                className="text-blue-500 underline cursor-pointer ml-1">
                                Signup
                            </Link >
                        </div>
                    </div>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
    )
}

export default Login
