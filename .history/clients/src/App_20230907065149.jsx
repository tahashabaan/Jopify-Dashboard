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
       <h1><Jobify></Jobify></h1>
       <RouterProvider router={router}/>
   </>
  )
}

export default App