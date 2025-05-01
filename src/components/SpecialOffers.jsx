import React from 'react';
import { specialOffers } from '../utils/content';

const SpecialOffers = () => {
    return (
        <section className="py-12 bg-gray-50 dark:bg-gray-700 ">
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-red-600 text-white rounded-xl p-8 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold mb-2">{specialOffers.special}</h2>
                            <p className="mb-4">{specialOffers.complimentary}</p>
                            <div className="flex items-center">
                                <span className="text-3xl font-bold mr-2">{specialOffers.money}</span>
                                <span className="text-sm">{specialOffers.person}</span>
                            </div>
                        </div>
                        <div className="md:w-1/2 text-center">
                            <a href="#reservation" className="inline-block bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300">{specialOffers.reserve}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;