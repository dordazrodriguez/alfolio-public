// Network Background Animation
// Prevent multiple initializations
let isInitialized = false;
let animationId = null;

// Cleanup function
function cleanupNetworkBackground() {
  const existingCanvas = document.getElementById('network-background');
  if (existingCanvas) {
    existingCanvas.remove();
  }
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
  isInitialized = false;
}

// Cleanup on page unload
window.addEventListener('beforeunload', cleanupNetworkBackground);
window.addEventListener('pagehide', cleanupNetworkBackground);

// Initialize as early as possible
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    setupNetworkBackground();
  });
} else {
  // DOM already loaded
  setupNetworkBackground();
}

function setupNetworkBackground() {
  // Prevent multiple initializations
  if (isInitialized) {
    return;
  }
  
  const homeContainer = document.querySelector('.home-container');
  if (!homeContainer) return;
  
  // Remove any existing canvas to prevent duplicates
  const existingCanvas = document.getElementById('network-background');
  if (existingCanvas) {
    existingCanvas.remove();
  }
  
  // Create canvas element with correct size immediately
  const canvas = document.createElement('canvas');
  canvas.id = 'network-background';
  canvas.className = 'network-background';
  
  // Set initial size before adding to DOM
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Set explicit styling to prevent any resizing
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.display = 'block';
  canvas.style.opacity = '0';
  canvas.style.transition = 'opacity 0.3s ease-in';
  
  // Insert canvas as the first child of home-container
  homeContainer.insertBefore(canvas, homeContainer.firstChild);
  
  // Mark as initialized
  isInitialized = true;
  
  // Initialize the network animation
  initNetworkAnimation(canvas);
  
  // Fade in the canvas to prevent glitch
  requestAnimationFrame(() => {
    canvas.style.opacity = '0.8';
  });
}

function initNetworkAnimation(canvas) {
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  // Get initial dimensions
  let width = canvas.width;
  let height = canvas.height;
  
  // Responsive canvas - update on resize
  window.addEventListener('resize', function() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
  
  // Node properties
  const nodeCount = Math.floor(width * height / 10000); // Density based on screen size
  const nodes = [];
  const maxDistance = 180; // Connection distance
  const nodeSize = 2;
  
  // Speed factor - increase this to make animation faster
  const speedFactor = 0.8; // Increased from 0.4
  
  // Get theme color values from CSS variables
  const getThemeColor = () => {
    const themeColor = getComputedStyle(document.documentElement).getPropertyValue('--global-theme-color').trim();
    return themeColor || '#0076df'; // Default fallback color
  };
  
  const getThemeColorRgb = () => {
    const rgbString = getComputedStyle(document.documentElement).getPropertyValue('--global-theme-color-rgb').trim();
    return rgbString || '0, 118, 223'; // Default fallback RGB
  };
  
  // Create nodes with wider distribution
  for (let i = 0; i < nodeCount; i++) {
    // Extend the area where nodes can be placed beyond the viewport
    const extendFactor = 1.2; // 20% larger than viewport
    nodes.push({
      x: (Math.random() * width * extendFactor) - (width * (extendFactor - 1) / 2),
      y: (Math.random() * height * extendFactor) - (height * (extendFactor - 1) / 2),
      vx: (Math.random() - 0.5) * speedFactor, // Using speedFactor for velocity
      vy: (Math.random() - 0.5) * speedFactor  // Using speedFactor for velocity
    });
  }
  
  // Animation function
  function animate() {
    // Check if canvas still exists
    if (!canvas || !canvas.parentNode) {
      return;
    }
    
    // Clear canvas completely
    ctx.clearRect(0, 0, width, height);
    
    // Update and draw nodes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      
      // Update position
      node.x += node.vx;
      node.y += node.vy;
      
      // Boundary check with wrap-around instead of bounce
      // This creates a more seamless effect
      if (node.x < -50) node.x = width + 50;
      if (node.x > width + 50) node.x = -50;
      if (node.y < -50) node.y = height + 50;
      if (node.y > height + 50) node.y = -50;
      
      // Only draw nodes that are visible or close to the viewport
      if (node.x > -20 && node.x < width + 20 && node.y > -20 && node.y < height + 20) {
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
        ctx.fillStyle = getThemeColor();
        ctx.fill();
      }
      
      // Connect nodes with lines if they're close enough
      for (let j = i + 1; j < nodes.length; j++) {
        const otherNode = nodes[j];
        const dx = node.x - otherNode.x;
        const dy = node.y - otherNode.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          // Only draw connections if at least one node is visible
          if ((node.x > -20 && node.x < width + 20 && node.y > -20 && node.y < height + 20) ||
              (otherNode.x > -20 && otherNode.x < width + 20 && otherNode.y > -20 && otherNode.y < height + 20)) {
            
            // Calculate opacity based on distance
            const opacity = 1 - (distance / maxDistance);
            
            // Draw connection line
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = `rgba(${getThemeColorRgb()}, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }
    
    animationId = requestAnimationFrame(animate);
  }
  
  // Start animation
  animate();
}
