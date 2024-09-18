//Este componenete esta relacionado con task.api.js ya que este componente TaskList.jsx saca todos los datos de alli

//Este componente se relaciona con TaskPage, ya que TaskList recoge todos los datos y TaskPage los muestra

//Este componente se relaciona con TaskCard

import { useEffect, useState } from 'react'
import { getAllTask } from '../api/task.api';
import { TaskCard } from './TaskCard';
export function TasksList() {
  
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    //Se crea esta funcion porque se deben de recibir los datos de manera asincrona
    async function loadTask(){
      const res = await getAllTask();
      //console.log(res);
      setTasks(res.data)
    }

    loadTask()

  }, []);
  
  return(
    <div className='grid grid-cols-3 gap-3'>{/*Muestra el contenido como secciones */}
      {tasks.map(task => (
        <TaskCard key={task.id} task={task}/> //la variable task hace referencia al props de TaskCard
        /*<div key={task.id}> 
          <h1>{task.title}</h1>
          <h1>{task.desctiption}</h1>
        </div>*/
      ))}          
    </div>
  )
}

