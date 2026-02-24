import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout/Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Contact from './Component/Contact.jsx'
import About from './Component/About.jsx'
import Home from './Component/Home.jsx'

const router=createBrowserRouter( 
createRoutesFromElements(
  <Route path='/' element={<Layout/>} >
    <Route path='' element={<Home/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/About' element={<About/>}></Route>
  </Route>
)
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
