//Este archivo esta relacionado con TaskList ya que de aqui ese archivo saca todos los datos
//Este archivo saca todos los datos de la base de datos de django
//Este archivo esta relacionado con TaskFormPage ya que este archivo guarda los datos que saca del componente TaskFormPage para despues guardalo en la base de datos

import axios from 'axios' //Permite realizar las peticiones

const tasksApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/',
})

export const getAllTask = () => tasksApi.get('/')
export const creatTask = (task) => tasksApi.post('/', task)
export const deleteTask = (id) =>  tasksApi.delete(`/${id}/`)
export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task)
export const getTask = (id) => tasksApi.get(`/${id}/`)
/*export const getAllTask = () => {
    return tasksApi.get('/')
    //return axios.get('http://localhost:8000/tasks/api/v1/tasks/')
}*/

/*export const creatTask = (task) = () =>{
    return tasksApi.post('/', task)
    //return axios.post('http://localhost:8000/tasks/api/v1/tasks/')
}*/