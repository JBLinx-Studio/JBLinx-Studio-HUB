
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Stats from '../components/Stats';
import Shop from '../components/Shop';
import Blog from '../components/Blog';
import Newsletter from '../components/Newsletter';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Enhanced scroll animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate');
        }
      });
    };

    // Enhanced header scroll effect with backdrop blur
    const handleScroll = () => {
      const header = document.querySelector('.header');
      const scrolled = window.scrollY > 50;
      
      if (scrolled) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
      
      animateOnScroll();
    };

    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Parallax effect for hero section
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    // Add event listeners
    window.addEventListener('scroll', () => {
      handleScroll();
      handleParallax();
    });
    document.addEventListener('click', handleAnchorClick);
    
    // Initial checks
    animateOnScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleParallax);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-light">
      <Header />
      <main className="relative overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Stats />
        <Portfolio />
        <Shop />
        <Blog />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
