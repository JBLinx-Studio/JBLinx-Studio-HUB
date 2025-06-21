
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Blog from '../components/Blog';
import Portfolio from '../components/Portfolio';
import Stats from '../components/Stats';
import Shop from '../components/Shop';
import Newsletter from '../components/Newsletter';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Optimized scroll animations with throttling
    let ticking = false;
    
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

    // Optimized header scroll effect
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const header = document.querySelector('.header');
          const scrolled = window.scrollY > 50;
          
          if (scrolled) {
            header?.classList.add('scrolled');
          } else {
            header?.classList.remove('scrolled');
          }
          
          animateOnScroll();
          ticking = false;
        });
        ticking = true;
      }
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

    // Throttled parallax effect
    let parallaxTicking = false;
    const handleParallax = () => {
      if (!parallaxTicking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const parallaxElements = document.querySelectorAll('.parallax');
          
          parallaxElements.forEach((element) => {
            const speed = 0.3; // Reduced speed for better performance
            const yPos = -(scrolled * speed);
            (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
          });
          parallaxTicking = false;
        });
        parallaxTicking = true;
      }
    };

    // Add event listeners with passive option for better performance
    window.addEventListener('scroll', () => {
      handleScroll();
      handleParallax();
    }, { passive: true });
    
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
        <Blog />
        <Services />
        <Stats />
        <Portfolio />
        <Shop />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
