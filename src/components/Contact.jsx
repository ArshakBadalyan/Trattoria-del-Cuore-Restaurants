import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contact } from '../utils/content';
 
const ContactDetailCard = ({ icon, title, content }) => (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
        <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FontAwesomeIcon icon={icon} className="text-red-600 text-2xl" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white text-black mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: content }}></p>
    </div>
);

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800  dark:text-white mb-4">{contact.contactUsTitle}</h2>
                    <div className="w-20 h-1 bg-red-600 mx-auto"></div>
                    <p className="mt-6 text-gray-600 dark:text-gray-200  max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: contact.haveQuestions }}></p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {contact.contactDetails.map((detail, index) => (
                        <ContactDetailCard key={index} icon={detail.icon} title={detail.title} content={detail.content} />
                    ))}
                </div>

                <div className="mt-16">
                    <div className="rounded-lg overflow-hidden shadow-lg ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.665953882454!2d-71.059486924006!3d42.35186097119288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3708f1e955555%3A0x7c7e9e9e9e9e9e9e!2s123%20Gourmet%20Ave%2C%20Boston%2C%20MA%2002108!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Restaurant Location"  
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;