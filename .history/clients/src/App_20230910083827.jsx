import { 
  RouterProvider, 
  createBrowserRouter,
} from "react-router-dom"

  import { 
    HomeLayout, 
    DashboardLayout, 
    Register, 
    Login,  
    Landing,
    Error
  } from "./pages";


const router = createBrowserRouter([
  {
   path:'/',
   element:<HomeLayout/>,
   errorElement:<Error/>,
   children:[
    {
      index:true,
      element:<Landing/>
    },{
      path:'dashboard',
      element:<DashboardLayout/>,
      
     }, {
      path:'register',
      element:<Register/>
     }, {
      path:'login',
      element:<Login/>
     }
   ]

  },
])

const App = () => {
  return (
    <>
       <RouterProvider router={router}>
       </RouterProvider>
   </>
  )
}

export default App