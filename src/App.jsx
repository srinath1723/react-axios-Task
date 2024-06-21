import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Users from "./pages/Users"
import {loader as usersLoader} from "./pages/Users";
const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Users />,
      loader: usersLoader
  }
  ])
  return <RouterProvider router={router} />
    
  
}

export default App
