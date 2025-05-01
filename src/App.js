import './App.css';
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SpecialOffers from './components/SpecialOffers';
import Menu from './components/menu/Menu';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/TestimonialCard';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(()=>{
      setTheme()
    },[theme])

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleAnchorClick = (e) => {
            if (e.target.hash !== '') {
                e.preventDefault();
                const targetId = e.target.hash;
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth',
                    });
                    setIsMobileMenuOpen(false);
                }
            }
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', handleAnchorClick);
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener('click', handleAnchorClick);
            });
        };
    }, []);

    return (
        <div className={theme}>
            <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
                <div className="relative">
                    <Navigation isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
                    <Hero />
                    <SpecialOffers />
                    <Menu />
                    <About />
                    <Gallery />
                    <Testimonials />
                    <Reservation />
                    <Contact />
                    <Footer />
                    {showBackToTop && (
                        <button
                            id="backToTop"
                            onClick={scrollToTop}
                            className="fixed bottom-8 right-8 bg-red-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center opacity-100 visible transition-all duration-300 dark:bg-red-500"
                        >
                            <FontAwesomeIcon icon={faArrowUp} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;