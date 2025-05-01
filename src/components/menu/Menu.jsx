import React, { useState } from "react";
import { menu, menuItemsData } from "../../utils/content";
import MenuCard from "./MenuCard";


const Menu = () => {
  const [activeTab, setActiveTab] = useState("starters");
  const menuTabsData = menu.menuTabs;

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  const getActiveMenuItems = () => {
    return menuItemsData[activeTab] || [];
  };

  return (
    <section id="menu" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            {menu.menu}
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {menu.dishes}
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm gap-5">
            {menuTabsData.map((item) => (
              <button
                key={item.key}
                className={`px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50   focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                  activeTab === item.key ? "bg-red-100 text-red-700" : ""
                }`}
                onClick={() => handleTabClick(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
         <div className="menu-content grid md:grid-cols-2 gap-8">
          {getActiveMenuItems().map((item, index) => (
            <MenuCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;