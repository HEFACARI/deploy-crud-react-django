//Este componente se relaciona con el componente TaskList
import React from 'react'
import {useNavigate} from 'react-router-dom'

export function TaskCard({task}) {

    const navigate = useNavigate()
  return (
    <div className='bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer'
        onClick={() => {
            navigate(`/tasks/${task.id}`)
            //navigate('/tasks/' + task.id)
        }
    }> 
        <hr />
        <h1 className='font-bold uppercase'>{task.title}</h1>
        <h4 className='text-slate-400'>{task.description}</h4>
        <hr />
    </div>
  )
}

