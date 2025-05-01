import React from 'react';
import { footer } from '../utils/content';
 
const Footer = () => {
    return (
        <footer className="bg-gray-700 dark:bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-red-500 dark:text-red-400 mb-4">{footer.restaurantName}</h3>
                        <p className="text-gray-200 dark:text-gray-200">{footer.restaurantDescription}</p>
                        <div className="flex space-x-4 mt-4">
                         </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold dark:text-white mb-4">{footer.quickLinksTitle}</h4>
                        <ul className="space-y-2">
                            {footer.quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-200 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 transition duration-300"
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold dark:text-white mb-4">{footer.hoursTitle}</h4>
                        <ul className="space-y-2 text-gray-200 dark:text-gray-200">
                            {footer.operatingHours.map((hour, index) => (
                                <li key={index}>{hour}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold dark:text-white mb-4">{footer.newsletterTitle}</h4>
                        <p className="text-gray-200 dark:text-gray-200 mb-4">{footer.newsletterDescription}</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder={footer.newsletterPlaceholder}
                                className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-900 dark:bg-gray-700 dark:text-white"
                            />
                            <button
                                type="submit"
                                className="bg-red-600 dark:bg-red-500 hover:bg-red-700 dark:hover:bg-red-600 px-4 py-2 rounded-r-lg transition duration-300"
                            >
                                 {footer.subscribeButtonText}
                            </button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-200 dark:text-gray-200 mb-4 md:mb-0">{footer.copyrightText}</p>
                    <div className="flex space-x-6">
                        <a
                            href={footer.privacyPolicyHref}
                            className="text-gray-200 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 transition duration-300"
                        >
                            {footer.privacyPolicyText}
                        </a>
                        <a
                            href={footer.termsOfServiceHref}
                            className="text-gray-200 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 transition duration-300"
                        >
                            {footer.termsOfServiceText}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;