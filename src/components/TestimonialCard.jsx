import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { testimonialCard } from '../utils/content';

const TestimonialCard = ({ testimonial }) => (
    <div className="testimonial-card bg-white/10 p-8 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-103 dark:bg-gray-800/50">
        <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
            </div>
            <div>
                <h4 className="font-bold text-white dark:text-gray-100">{testimonial.name}</h4>
                <p className="text-red-200 text-sm dark:text-red-300">{testimonial.title}</p>
            </div>
        </div>
        <p className="mb-6 text-white dark:text-gray-300">{testimonial.quote}</p>
        <div className="flex text-yellow-300">
            {Array(testimonial.rating).fill().map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} />
            ))}
        </div>
    </div>
);

const Testimonials = () => {
 
    return (
        <section className="py-20 bg-red-600 text-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">{testimonialCard.title}</h2>
                    <div className="w-20 h-1 bg-white mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialCard.testimonialsData.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;