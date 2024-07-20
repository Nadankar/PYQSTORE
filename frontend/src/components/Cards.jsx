import React from 'react'
import {Link} from "react-router-dom"

function Cards({data}) {
 
    return (
        <>
         <div className="mt-5 mb-5">
                <div className="p-3 shadow-lg hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white " >
                    <figure >
                        <img className="card glass w-full h-80 object-cover"
                            src={data.image}
                            alt="card" />
                    </figure>
                    <div className="card-body bg-white dark:bg-slate-900 dark:text-white">
                        <h2 className="card-title">{data.branch_name}</h2>
                        <p>{data.description}</p>
                        <div className="card-actions justify-end">
                            <Link to={data.branch_name}>
                            <button className="btn btn-primary">See</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
         
        </>
    )
}

export default Cards
