import React from "react";


const AdminSidePanel = ({ setCategory }) => {
  const categoryList = [
    { title: "Dashboard" },
    { title: "Products" },
    { title: "Orders" },
    { title: "Users" },
  ];

  return (
    <div className="admin-side-panel">
      <div className="menu-container">
        {categoryList.map((obj, index) => (
          <h3
            key={index}
            className="menu-item"
            onClick={() => setCategory(obj.title)}
          >
            {obj.title}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default AdminSidePanel;
