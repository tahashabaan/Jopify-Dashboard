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
      <h1>jobify</h1>
      <RouterProvider router={}/>
    </>
  )
}

export default App