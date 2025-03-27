import React from "react";

const AdminSidePanel = ({ setCategory }) => {
  const categoryList = [
    {
      title: "Dashboard",
    },
    {
      title: "Products",
    },
    {
      title: "Orders",
    },
    {
      title:"Users" ,
    },
  ];

  return (
    <div style={{ height: "100vh", width: "100%" }} className=" d-flex border text-center justify-content-center align-items-center adminside">
      <div>
      {categoryList.map((obj) => (
        <h3 className="m-5"
          onClick={() => {
            setCategory(obj.title);
          }}
          style={{cursor:"pointer"}}
        >
          {obj.title}
        </h3>
      ))}
      </div>
      
    </div> 
  );
};

export default AdminSidePanel;
