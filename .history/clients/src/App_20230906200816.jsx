import { createBrowserRouter } from "react-router-dom"
import {HomeLayout, DashboardLayout, Login} from "./pages"

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
    element:</>
  }, {
    path:'/dashboard/all-jobs',
    element:""
  },{
    path:'/dashboard/stats',
    element:""
  },{
    path:'/dashboard/profile',
    element:""
  },{
    path:'/dashboard/edit-job/:id',
    element:""
  },{
    path:'/dashboard/del-job/:id',
    element:""
  },







])
const App = () => {
  return (
    <h1>Jopify App</h1>
  )
}

export default App