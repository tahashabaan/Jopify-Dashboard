import { RouterProvider, 
  createBrowserRouter,
  Routes, 
  Route } from "react-router-dom"
import HomeLayout from './pages/HomeLayout';

const router = createBrowserRouter([
  {
   path:'/',
   element:<HomeLayout/>
  },
])

const App = () => {
  return (
    <>
     
       <RouterProvider router={router}/>
    
  )
}

export default App