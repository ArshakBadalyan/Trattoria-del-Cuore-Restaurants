import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faPepperHot,
  faSeedling,
  faWineGlassAlt,
  faFish,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import { menuItemsData } from "../../utils/content";

const TagIcon = ({ tag }) => {
  switch (tag) {
    case "Vegetarian":
      return (
        <>
          <FontAwesomeIcon icon={faLeaf} className="text-green-500 mr-1" />{" "}
          {menuItemsData.tags.vegetarian}
        </>
      );
    case "Spicy Option":
      return (
        <>
          <FontAwesomeIcon icon={faPepperHot} className="text-red-500 mr-1" />
          {menuItemsData.tags.spicyOption}
        </>
      );
    case "Vegan Option":
      return (
        <>
          <FontAwesomeIcon
            icon={faSeedling}
            className="text-green-700 ml-3 mr-1"
          />{" "}
          {menuItemsData.tags.veganOption}
        </>
      );
    case "Wine Pairing Suggested":
      return (
        <>
          <FontAwesomeIcon
            icon={faWineGlassAlt}
            className="text-purple-500 mr-1"
          />{" "}
          {menuItemsData.tags.winePairingSuggested}
        </>
      );
    case "Pescatarian":
      return (
        <>
          <FontAwesomeIcon icon={faFish} className="text-blue-500 mr-1" />{" "}
          {menuItemsData.tags.pescatarian}
        </>
      );
    case "Gluten-Free":
      return (
        <>
          <FontAwesomeIcon icon={faLeaf} className="text-green-500 ml-3 mr-1" />{" "}
          {menuItemsData.tags.glutenFree}
        </>
      );
    case "Contains Coffee":
      return (
        <>
          <FontAwesomeIcon icon={faCoffee} className="text-brown-500 mr-1" />{" "}
          {menuItemsData.tags.containsCoffee}
        </>
      );
    default:
      return null;
  }
};

const MenuCard = ({ item }) => (
  <div className="bg-white dark:bg-gray-80 h-[200px] rounded-lg shadow-md overflow-hidden transition transition duration-300 hover:-translate-1 hover:shadow-lg dark:bg-gray-800 dark:shadow-gray-700">
    <div className="flex h-full ">
      <div className="w-1/3 h-full overflow-hidden ">
        <div className="h-full w-full transition-transform duration-500 hover:scale-110  ">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover "
            style={{ transition: "transform 0.5s ease-in-out" }}
          />
        </div>
      </div>
      <div className="w-2/3 p-6 flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              {item.name}
            </h3>
            <span className="starts-price text-red-600 font-bold dark:text-red-500">
              {item.price}
            </span>
          </div>
          <p className="starts-description text-gray-600 dark:text-gray-300">
            {item.description}
          </p>
        </div>
        <div className="starts-tags flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-2">
          {item.tags.map((tag) => (
            <TagIcon key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  </div>
);


export default MenuCard;