import React from "react";
import { hero } from "../utils/content";
import ImageGrid from "../components/shared/ImageGrid";

const Hero = () => {
  return (
    <section
      id="home"
      className={`relative flex items-center justify-center text-white pt-20 h-[90vh] overflow-hidden `}
    >
      <div className="absolute inset-0 z-0 w-[100vw] p-[5px] brightness-50 bg-gray-500/10 dark:bg-gray-900 backdrop-brightness-50">
        <ImageGrid images={hero.images} displayDuration={10000} maxItems={6} />
      </div>

      <div className="relative  text-center px-4 max-w-4xl ">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white dark:text-gray-100">
          {hero.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100 dark:text-gray-300">
          {hero.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#menu"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 dark:bg-red-500 dark:hover:bg-red-600"
          >
            {hero.menu}
          </a>
          <a
            href="#reservation"
            className="bg-transparent hover:bg-white hover:text-gray-900 dark:text-white text-gray-100 font-bold py-3 px-6 border-2 border-black border-white rounded-lg transition duration-300 dark:hover:text-black dark:border-gray-300"
          >
            {hero.book}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
