import { Outlet } from 'react-router-dom'
import Navbar from './NavBar'
const layout = () => {
  return (
    <div>
       <Navbar/>
      <Outlet />
      
    </div>
  )
}

export default layout
