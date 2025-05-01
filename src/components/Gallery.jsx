import React from 'react';
import { gallery } from '../utils/content';

const GalleryItem = ({ imageUrl, altText }) => (
    <div className="gallery-item rounded-lg overflow-hidden h-48 hover:scale-105 transition-transform duration-500">
        <img src={imageUrl} alt={altText} className="gallery-image w-full h-full object-cover" />
    </div>
);

const Gallery = () => {
    return (
        <section id="gallery" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-gray-100">{gallery.gallery}</h2>
                    <div className="w-20 h-1 bg-red-600 mx-auto dark:bg-red-500"></div>
                    <p className="mt-6 text-gray-600 max-w-3xl mx-auto dark:text-gray-300">{gallery.description}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {gallery.galleryImages.map((image, index) => (
                        <GalleryItem key={index} imageUrl={image.url} altText={image.alt} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;