/* Pagina que sirve para crear un formulario de tareas y pedirle al usuario que ingrese datos mediante inputs para despues guardarlo en la base de datos */

import { useEffect } from 'react';
import { useForm } from 'react-hook-form'//Esto valida y recoge lo que tenemos en los inputs 
import { creatTask, deleteTask, updateTask, getTask } from '../api/task.api';
import { useNavigate, useParams } from 'react-router-dom';//useParams extrae los parametros que se tiene en la url 
import {toast} from 'react-hot-toast'

export function TaskFormPage() {

  const {register, handleSubmit, formState: {
    errors}, setValue
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();
  //console.log(params)

  //Ventana emergente tarea actualizada
  const estilosVEA = () => {
    toast.success("Tarea actualizada", {
      position:"top-center",
      style:{
        background:"green"
      }
    })
  }

  //Ventana emergente tarea creada
  function estilosVEC (){
    return toast.success('Tarea Creada', {
      position:"top-center",
      style: {
        background: "green"
      }
    })
  }

  //Despues que se envien los datos onSubmit los va a recibir y luego handleSubmit extraera los datos
  const onSubmit = handleSubmit(async data => {
    if(params.id){
      await updateTask(params.id, data)
      estilosVEA()
      //console.log("Actualizando")
    }else{
      await creatTask(data);
      estilosVEC()
      //console.log(data)
      //console.log(res)
    }
    navigate("/tasks");
  })

  //Esta funcion sirve para que cuando se le de click en editar, se muestren los datos a editar
  useEffect(() => {
    async function loadTask (){ //Se tiene que crear esta funcion ya que no se puede colocar async y await dentro de useEffect
      
      //LLena los datos en los inputs
      if(params.id){
        const res = await getTask(params.id)
        //console.log(res)
        setValue('title', res.data.title)//data es un atributo de data en la consola del navegador
        setValue('description', res.data.description)

        /*Otra forma de realizar la parte de arriba
        const {data:{title, description}} = await getTask(params.id)
        setValue('title', title)
        setValue('description', description)*/
      }
    }
    loadTask();
  },[])

  return (
    <div className='max-w-xl mx-auto items-center'>
        <h1 className='text-3xl text-center m-3'>TaskFormPage</h1> 
        
        <form onSubmit={onSubmit}> {/* Envia los datos */}
          
          <input type="text" placeholder='title' {...register("title", {required:true})}//register al ejecutarse da un objeto, se colocan los 3 puntos (...) para que copie todo el objeto y despues se añada a el input
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
          />
          {errors.title && <span>This field is required</span>}{/*Si ocurre algun error en el input aparecera este mensaje */}
          
          <textarea rows={3} placeholder='description' {...register("description", {required:true})}
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
          />
          {errors.description && <span>This field is required</span>}{/*Si ocurre algun error en el input aparecera este mensaje */}
          <button className='bg-green-500 px-8 py-2 rounded-lg block ml-56 mt-3'>Save</button>
        </form>

        {params.id && (
        
        <div className='flex justify-normal'>
          <button 
          className='bg-red-500 px-7 py-2 rounded-lg ml-56 mt-3'
          onClick={async () => {
            const accepted = window.confirm('Are you sure?');
            if(accepted){
              await deleteTask(params.id);
              navigate("/tasks");
              toast.success("Tarea eliminada", {
                position:"top-center",
                style:{
                  background:"red",
                }
              })
            }
          }}
          >
            Delete
          </button>
        </div>
        
        )}{/*Esta linea se lee asi: si params.id existe, entonces muestrame este boton */}
    </div>
  );
}

