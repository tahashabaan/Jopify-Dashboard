import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {HomeLayout, DashboardLayout, Login, Register, Alljob} from "./pages"

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>
  }, {
    path:'/dashboard',
    element:<DashboardLayout/>
  },{
    path:'/login',
    element:<Login/>
  },{
    path:'/register',
    element:<Register/>
  }, {
    path:'/dashboard/all-jobs',
    element:<Alljob/>
  }
  //,{
  //   path:'/dashboard/stats',
  //   element:""
  // },{
  //   path:'/dashboard/profile',
  //   element:""
  // },{
  //   path:'/dashboard/edit-job/:id',
  //   element:""
  // },{
  //   path:'/dashboard/del-job/:id',
  //   element:""
  // },
])

const App = () => {
  return (
      <>
        <h1>jopify</h1>
        <RouterProvider router={router}/> 
       </> )
}

export default App