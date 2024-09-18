
import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {TaskPage} from "./pages/TaskPage";
import { TaskFormPage } from './pages/TaskFormPage';
import { Navigation } from './components/Navigation';
import {Toaster} from 'react-hot-toast' //Estiliza la pagina y crear ventanas emergentes 
function App() {
  return (
    <BrowserRouter>
      <div className='container mx-auto'> {/*mx-auto centra todo el contenido */}
        <Navigation/>
        <Routes>
          <Route path='/' element={<Navigate to="/tasks"/>}/>
          <Route path='/tasks' element={<TaskPage/>}/>
          <Route path='/create-tasks' element={<TaskFormPage/>}/>
          <Route path='/tasks/:id' element={<TaskFormPage/>}/>
        </Routes>
        <Toaster/>
      </div>
      
    </BrowserRouter>
  )
}

export default App