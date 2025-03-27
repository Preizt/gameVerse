import React from 'react'
import AdminDashBoardHome from './admincomponents/AdminDashBoardHome'
import OrderDetail from '../pages/admincomponents/OrderDetail'
import AdminAddProducts from '../pages/admincomponents/AdminAddProducts'
import UserDetails from '../pages/admincomponents/UserDetails'

const AdminMainPanel = ({category}) => {
  
  return (
    <div className= "adminmain" >
        
        {category=="Dashboard"?<AdminDashBoardHome/>:""}
        {category=="Orders"?<OrderDetail/>:""}
        {category=="Products"?<AdminAddProducts/>:""}
        {category=="Users"?<UserDetails/>:""}
        
    </div>
  )
}

export default AdminMainPanel