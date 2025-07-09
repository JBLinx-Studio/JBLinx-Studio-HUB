
/* ---- Enhanced particles.js config with interactive vertices ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 1500
      }
    },
    "color": {
      "value": ["#10b981", "#06b6d4", "#8b5cf6", "#f59e0b", "#ef4444", "#3b82f6", "#ec4899", "#06b6d4"]
    },
    "shape": {
      "type": ["circle", "triangle", "polygon"],
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 6
      }
    },
    "opacity": {
      "value": 0.9,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 3,
        "opacity_min": 0.2,
        "sync": false
      }
    },
    "size": {
      "value": 2.5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 4,
        "size_min": 0.8,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 120,
      "color": "#ffffff",
      "opacity": 0.8,
      "width": 1.5
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": true,
      "attract": {
        "enable": true,
        "rotateX": 800,
        "rotateY": 800
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": ["grab", "bubble", "repulse"]
      },
      "onclick": {
        "enable": true,
        "mode": ["push", "bubble"]
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1,
          "color": "#10b981",
          "width": 3
        }
      },
      "bubble": {
        "distance": 150,
        "size": 6,
        "duration": 0.4,
        "opacity": 1,
        "speed": 4
      },
      "repulse": {
        "distance": 100,
        "duration": 0.6
      },
      "push": {
        "particles_nb": 12
      },
      "remove": {
        "particles_nb": 3
      }
    }
  },
  "retina_detect": true
});

// Enhanced interactive background with floating vertices and neural network effects
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.querySelector('#particles-js canvas');
  if (canvas) {
    let mouseX = 0;
    let mouseY = 0;
    let colorIndex = 0;
    let animationFrame;
    
    // Enhanced DNA/Neural color palette
    const neuralColors = [
      'rgba(16, 185, 129, 0.15)', // emerald
      'rgba(6, 182, 212, 0.15)',  // cyan
      'rgba(139, 92, 246, 0.15)', // violet
      'rgba(245, 158, 11, 0.15)', // amber
      'rgba(239, 68, 68, 0.15)',  // red
      'rgba(59, 130, 246, 0.15)', // blue
      'rgba(236, 72, 153, 0.15)', // pink
      'rgba(34, 197, 94, 0.15)'   // green
    ];
    
    // Create floating vertices overlay
    function createFloatingVertices() {
      const verticesContainer = document.createElement('div');
      verticesContainer.id = 'floating-vertices';
      verticesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
      `;
      
      // Create floating vertex elements
      for (let i = 0; i < 25; i++) {
        const vertex = document.createElement('div');
        vertex.className = 'floating-vertex';
        vertex.style.cssText = `
          position: absolute;
          width: ${Math.random() * 4 + 2}px;
          height: ${Math.random() * 4 + 2}px;
          background: ${neuralColors[Math.floor(Math.random() * neuralColors.length)]};
          border-radius: 50%;
          animation: float-vertex ${Math.random() * 20 + 15}s linear infinite;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          box-shadow: 0 0 ${Math.random() * 10 + 5}px currentColor;
        `;
        verticesContainer.appendChild(vertex);
      }
      
      const particlesContainer = document.getElementById('particles-js');
      if (particlesContainer) {
        particlesContainer.appendChild(verticesContainer);
      }
    }
    
    // Enhanced animated background color cycling with neural network patterns
    function cycleBackgroundColors() {
      const particlesContainer = document.getElementById('particles-js');
      if (particlesContainer) {
        colorIndex = (colorIndex + 1) % neuralColors.length;
        const primary = neuralColors[colorIndex];
        const secondary = neuralColors[(colorIndex + 3) % neuralColors.length];
        const tertiary = neuralColors[(colorIndex + 5) % neuralColors.length];
        
        particlesContainer.style.background = `
          radial-gradient(circle at 15% 25%, ${primary} 0%, transparent 60%),
          radial-gradient(circle at 85% 75%, ${secondary} 0%, transparent 60%),
          radial-gradient(circle at 50% 50%, ${tertiary} 0%, transparent 70%),
          radial-gradient(circle at 25% 75%, ${neuralColors[(colorIndex + 1) % neuralColors.length]} 0%, transparent 50%),
          radial-gradient(circle at 75% 25%, ${neuralColors[(colorIndex + 2) % neuralColors.length]} 0%, transparent 50%),
          linear-gradient(135deg, rgba(15, 23, 42, 0.97) 0%, rgba(2, 6, 23, 0.99) 100%)
        `;
      }
    }
    
    // Start enhanced effects
    createFloatingVertices();
    setInterval(cycleBackgroundColors, 4000);
    cycleBackgroundColors();
    
    // Enhanced mouse interaction with neural network effects
    canvas.addEventListener('mousemove', function(e) {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      
      canvas.style.cursor = 'none';
      
      // Create enhanced neural glow effect
      const neuralGlow = document.createElement('div');
      neuralGlow.style.position = 'absolute';
      neuralGlow.style.left = (e.clientX - 15) + 'px';
      neuralGlow.style.top = (e.clientY - 15) + 'px';
      neuralGlow.style.width = '30px';
      neuralGlow.style.height = '30px';
      neuralGlow.style.background = `radial-gradient(circle, ${neuralColors[colorIndex]} 0%, transparent 70%)`;
      neuralGlow.style.borderRadius = '50%';
      neuralGlow.style.pointerEvents = 'none';
      neuralGlow.style.zIndex = '1000';
      neuralGlow.style.animation = 'neural-pulse 0.8s ease-out forwards';
      neuralGlow.style.boxShadow = `0 0 20px ${neuralColors[colorIndex]}, 0 0 40px ${neuralColors[colorIndex]}`;
      
      document.body.appendChild(neuralGlow);
      
      setTimeout(() => {
        if (neuralGlow.parentNode) {
          neuralGlow.parentNode.removeChild(neuralGlow);
        }
      }, 800);
      
      // Create trailing effect
      if (Math.random() < 0.3) {
        const trail = document.createElement('div');
        trail.style.position = 'absolute';
        trail.style.left = (e.clientX - 3) + 'px';
        trail.style.top = (e.clientY - 3) + 'px';
        trail.style.width = '6px';
        trail.style.height = '6px';
        trail.style.background = neuralColors[(colorIndex + 2) % neuralColors.length];
        trail.style.borderRadius = '50%';
        trail.style.pointerEvents = 'none';
        trail.style.zIndex = '999';
        trail.style.animation = 'fade-trail 1.5s ease-out forwards';
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
          if (trail.parentNode) {
            trail.parentNode.removeChild(trail);
          }
        }, 1500);
      }
    });
    
    canvas.addEventListener('mouseleave', function() {
      canvas.style.cursor = 'default';
    });
    
    // Enhanced click effects with neural burst
    canvas.addEventListener('click', function(e) {
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          const burst = document.createElement('div');
          const angle = (Math.PI * 2 * i) / 8;
          const distance = Math.random() * 100 + 50;
          
          burst.style.position = 'absolute';
          burst.style.left = (e.clientX + Math.cos(angle) * distance) + 'px';
          burst.style.top = (e.clientY + Math.sin(angle) * distance) + 'px';
          burst.style.width = '4px';
          burst.style.height = '4px';
          burst.style.background = neuralColors[Math.floor(Math.random() * neuralColors.length)];
          burst.style.borderRadius = '50%';
          burst.style.pointerEvents = 'none';
          burst.style.zIndex = '1001';
          burst.style.animation = 'neural-burst 1s ease-out forwards';
          burst.style.boxShadow = '0 0 10px currentColor';
          
          document.body.appendChild(burst);
          
          setTimeout(() => {
            if (burst.parentNode) {
              burst.parentNode.removeChild(burst);
            }
          }, 1000);
        }, i * 50);
      }
    });
    
    // Enhanced animation styles
    const enhancedStyle = document.createElement('style');
    enhancedStyle.textContent = `
      @keyframes neural-pulse {
        0% {
          transform: scale(0);
          opacity: 0.9;
        }
        50% {
          transform: scale(1.5);
          opacity: 0.6;
        }
        100% {
          transform: scale(3);
          opacity: 0;
        }
      }
      
      @keyframes neural-burst {
        0% {
          transform: scale(0);
          opacity: 1;
        }
        100% {
          transform: scale(2);
          opacity: 0;
        }
      }
      
      @keyframes fade-trail {
        0% {
          opacity: 0.8;
          transform: scale(1);
        }
        100% {
          opacity: 0;
          transform: scale(0.5);
        }
      }
      
      @keyframes float-vertex {
        0% {
          transform: translateY(100vh) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-100px) rotate(360deg);
          opacity: 0;
        }
      }
      
      #particles-js {
        transition: background 3s ease-in-out;
      }
      
      #particles-js canvas {
        filter: brightness(1.2) contrast(1.1) saturate(1.1);
      }
      
      .floating-vertex {
        filter: blur(0.5px);
      }
    `;
    document.head.appendChild(enhancedStyle);
  }
});

// Load interactive neural network script
const neuralScript = document.createElement('script');
neuralScript.src = './src/js/interactive-neural.js';
neuralScript.async = true;
document.head.appendChild(neuralScript);

// Load terminal sounds and effects
const terminalScript = document.createElement('script');
terminalScript.src = './src/js/terminal-sounds.js';
terminalScript.async = true;
terminalScript.onload = () => {
  console.log('Terminal sounds loaded successfully!');
};
terminalScript.onerror = () => {
  console.error('Failed to load terminal sounds');
};
document.head.appendChild(terminalScript);
