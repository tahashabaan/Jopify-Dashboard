import { RouterProvider, 
  createBrowserRouter,
  Routes, 
  Route } from "react-router-dom"
import HomeLayout from './pages/HomeLayout';
import DashboardLayout from './pages/DashboardLayout';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
   path:'/',
   element:<HomeLayout/>
  },{
    path:'/dashboard',
    element:<DashboardLayout/>
   }, {
    path:'/register',
    element:<Register/>
   }, {
    path:'/login',
    element:<Lo/>
   },
])

const App = () => {
  return (
    <>
       <h1>Jobify</h1>
       <RouterProvider router={router}/>
   </>
  )
}

export default App