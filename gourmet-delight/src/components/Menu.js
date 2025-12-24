import React from 'react';

function Menu() {
  const menuItems = [
    {
      id: 1,
      name: "Truffle Pasta",
      description: "Handmade pasta with black truffle, parmesan cream, and fresh herbs",
      price: "$28",
      category: "Main Course"
    },
    {
      id: 2,
      name: "Grilled Salmon",
      description: "Atlantic salmon with lemon butter sauce, asparagus, and roasted potatoes",
      price: "$32",
      category: "Main Course"
    },
    {
      id: 3,
      name: "Caprese Salad",
      description: "Fresh mozzarella, tomatoes, basil, and balsamic reduction",
      price: "$16",
      category: "Appetizer"
    },
    {
      id: 4,
      name: "Beef Wellington",
      description: "Premium beef tenderloin wrapped in puff pastry with mushroom duxelles",
      price: "$42",
      category: "Main Course"
    },
    {
      id: 5,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
      price: "$14",
      category: "Dessert"
    },
    {
      id: 6,
      name: "Craft Cocktails",
      description: "Selection of signature cocktails crafted by our expert mixologists",
      price: "$13-16",
      category: "Drinks"
    }
  ];

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle">Carefully crafted dishes using seasonal ingredients</p>
        </div>
        
        <div className="menu-categories">
          <button className="category-btn active">All</button>
          <button className="category-btn">Appetizers</button>
          <button className="category-btn">Main Course</button>
          <button className="category-btn">Desserts</button>
          <button className="category-btn">Drinks</button>
        </div>
        
        <div className="menu-grid">
          {menuItems.map(item => (
            <div className="menu-item" key={item.id}>
              <div className="menu-item-header">
                <h3 className="menu-item-name">{item.name}</h3>
                <span className="menu-item-price">{item.price}</span>
              </div>
              <p className="menu-item-description">{item.description}</p>
              <span className="menu-item-category">{item.category}</span>
            </div>
          ))}
        </div>
        
        <div className="menu-footer">
          <a href="#contact" className="btn-primary">View Full Menu</a>
        </div>
      </div>
    </section>
  );
}

export default Menu;