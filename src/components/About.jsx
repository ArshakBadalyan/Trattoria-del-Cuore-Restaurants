import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { about } from "../utils/content";
import ImageSlider from "./shared/ImageSlider";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              {about.ourStory}
            </h2>
            <div className="w-20 h-1 bg-red-600 mb-6"></div>
            <p className="text-gray-600 mb-6 dark:text-gray-200">
              {about.foundation}
            </p>
            <p className="text-gray-600 mb-8 dark:text-gray-200">
              {about.welcoming}
            </p>
            <div className="grid grid-cols-2 gap-6">
              {about.aim.map((item, index) => (
                <div className="flex items-start" key={index}>
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-red-600  "
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-200 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <ImageSlider
                images={about.images}
                maxWidth="100%"
                maxHeight="400px"
                autoplayInterval={4000}
                infinite
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute sm:bottom-[-3.75rem]   bottom-[-4.5rem] left-[0.5rem]  bg-white dark:bg-gray-400 p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FontAwesomeIcon
                      icon={faUserTie}
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {about.cookFullName}
                    </h4>
                    <p className="text-gray-600 text-sm">{about.owner}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
