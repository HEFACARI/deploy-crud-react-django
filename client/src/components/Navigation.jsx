import React from 'react'
import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <div className='flex justify-between py-3 bg-green-950' >
        <Link to="/tasks"> 
            <h1 className='font-bold text-3xl mb-3 ml-96'>Task App</h1> 
        </Link>
        <button className='bg-indigo-500 px-3 py-2 rounded-lg mr-96'>
          <Link to="/create-tasks"><h1>Create Tasks</h1></Link>
        </button>
    </div>
  )
}

