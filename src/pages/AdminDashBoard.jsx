import React, { useState } from 'react'
import AdminSidePanel from './AdminSidePanel'
import AdminMainPanel from './AdminMainPanel'



const AdminDashBoard = () => {

  const [category,setCategory] = useState("Dashboard")
  console.log(category);
  

  return (
    <>
    
    <div className="d-flex" id='admin'>
        <div className="">
            <AdminSidePanel setCategory={setCategory} />
        </div>
        <div className="w-100">
             <AdminMainPanel category = {category} />
        </div>
    </div>
    </>
    
  )
}

export default AdminDashBoard