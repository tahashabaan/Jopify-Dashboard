import { createBrowserRouter } from "react-router-dom"
import {HomeLayout, DashboardLayout, Login, Register} from "./pages"

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
    element:<Alljo/>
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