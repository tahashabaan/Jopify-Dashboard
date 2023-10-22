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
    path:'/',
    element:"/dashboard/all-jobs"
  },{
    path:'/dashboard/stats',
    element:""
  },{
    path:'/',
    element:""
  },{
    path:'/',
    element:""
  },







])
const App = () => {
  return (
    <h1>Jopify App</h1>
  )
}

export default App