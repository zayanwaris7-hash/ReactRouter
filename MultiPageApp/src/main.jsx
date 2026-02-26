import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout/Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Contact from './Component/Contact.jsx'
import About from './Component/About.jsx'
import Home from './Component/Home.jsx'
import GitHub, { gitInfoLoader } from './Component/GitHub.jsx'
import User from './Component/User.jsx'
import { useParams } from 'react-router-dom'
import { ErrorPage } from './Component/Error.jsx'

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route 
      path='/' 
      element={<Layout/>} 
      errorElement={<ErrorPage />} // <--- Add this here!
    >
      <Route path='' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route 
        loader={gitInfoLoader} 
        path='github' 
        element={<GitHub />} 
      />
      <Route path='user/:userId' element={<User />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
