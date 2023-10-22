import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path:'/',
    element:""
  },
  {
    path:'/dashboard',
    element:""
  },{
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