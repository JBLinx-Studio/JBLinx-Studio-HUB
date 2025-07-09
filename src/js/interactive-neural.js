
// Interactive Neural Network Effects
document.addEventListener('DOMContentLoaded', function() {
  const neuralCanvas = document.getElementById('neural-network-canvas');
  if (!neuralCanvas) return;
  
  const svg = neuralCanvas.querySelector('svg');
  const nodes = svg.querySelectorAll('.neural-node');
  const lines = svg.querySelectorAll('.neural-line');
  
  let mouseX = 0;
  let mouseY = 0;
  let isMouseOver = false;
  
  // Mouse tracking
  neuralCanvas.addEventListener('mousemove', function(e) {
    const rect = neuralCanvas.getBoundingClientRect();
    mouseX = ((e.clientX - rect.left) / rect.width) * 800; // Scale to SVG coordinates
    mouseY = ((e.clientY - rect.top) / rect.height) * 400;
    isMouseOver = true;
    
    // Apply interactive effects
    updateNeuralNetwork();
  });
  
  neuralCanvas.addEventListener('mouseenter', function() {
    isMouseOver = true;
  });
  
  neuralCanvas.addEventListener('mouseleave', function() {
    isMouseOver = false;
    // Reset all effects
    resetNeuralNetwork();
  });
  
  function updateNeuralNetwork() {
    nodes.forEach(node => {
      const cx = parseFloat(node.getAttribute('cx'));
      const cy = parseFloat(node.getAttribute('cy'));
      const distance = Math.sqrt(Math.pow(mouseX - cx, 2) + Math.pow(mouseY - cy, 2));
      const maxDistance = 100;
      
      if (distance < maxDistance) {
        const intensity = 1 - (distance / maxDistance);
        
        // Push/pull effect
        const force = intensity * 8;
        const angle = Math.atan2(mouseY - cy, mouseX - cx);
        
        // Push effect (repulsion)
        const newX = cx - Math.cos(angle) * force;
        const newY = cy - Math.sin(angle) * force;
        
        // Apply transformation
        node.style.transform = `translate(${newX - cx}px, ${newY - cy}px)`;
        node.style.filter = `brightness(${1 + intensity * 0.8})`;
        
        // Scale effect
        const scale = 1 + intensity * 0.5;
        node.style.transformOrigin = 'center';
        node.style.transform += ` scale(${scale})`;
      } else {
        // Reset node position and effects
        node.style.transform = '';
        node.style.filter = '';
      }
    });
    
    // Update lines based on mouse proximity
    lines.forEach(line => {
      const x1 = parseFloat(line.getAttribute('x1'));
      const y1 = parseFloat(line.getAttribute('y1'));
      const x2 = parseFloat(line.getAttribute('x2'));
      const y2 = parseFloat(line.getAttribute('y2'));
      
      const midX = (x1 + x2) / 2;
      const midY = (y1 + y2) / 2;
      
      const distance = Math.sqrt(Math.pow(mouseX - midX, 2) + Math.pow(mouseY - midY, 2));
      const maxDistance = 80;
      
      if (distance < maxDistance) {
        const intensity = 1 - (distance / maxDistance);
        line.style.strokeWidth = `${1.5 + intensity * 2}px`;
        line.style.filter = `brightness(${1 + intensity * 0.6}) drop-shadow(0 0 ${intensity * 8}px currentColor)`;
      } else {
        line.style.strokeWidth = '';
        line.style.filter = '';
      }
    });
  }
  
  function resetNeuralNetwork() {
    nodes.forEach(node => {
      node.style.transform = '';
      node.style.filter = '';
    });
    
    lines.forEach(line => {
      line.style.strokeWidth = '';
      line.style.filter = '';
    });
  }
  
  // Add click effects
  nodes.forEach(node => {
    node.addEventListener('click', function() {
      // Create ripple effect
      const ripple = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      const cx = this.getAttribute('cx');
      const cy = this.getAttribute('cy');
      
      ripple.setAttribute('cx', cx);
      ripple.setAttribute('cy', cy);
      ripple.setAttribute('r', '0');
      ripple.setAttribute('fill', 'none');
      ripple.setAttribute('stroke', 'url(#neuralGradient)');
      ripple.setAttribute('stroke-width', '2');
      ripple.setAttribute('opacity', '0.8');
      
      svg.appendChild(ripple);
      
      // Animate ripple
      let radius = 0;
      let opacity = 0.8;
      const animate = () => {
        radius += 2;
        opacity -= 0.02;
        
        ripple.setAttribute('r', radius);
        ripple.setAttribute('opacity', opacity);
        
        if (opacity > 0 && radius < 50) {
          requestAnimationFrame(animate);
        } else {
          svg.removeChild(ripple);
        }
      };
      
      requestAnimationFrame(animate);
    });
  });
});
