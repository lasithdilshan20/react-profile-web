import React, { useEffect, useRef } from 'react';

const Snowfall = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let lastTime = 0;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Snowflake class
    class Snowflake {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height; // Start above viewport
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 0.5 + 0.5; // Consistent falling speed
        this.opacity = Math.random() * 0.5 + 0.3; // Varying opacity
      }

      move(deltaTime) {
        // Use deltaTime to ensure consistent speed regardless of frame rate
        const timeScale = deltaTime / 16; // normalize to 60fps
        
        this.x += this.speedX * timeScale;
        this.y += this.speedY * timeScale;

        // Reset when snowflake goes out of bounds
        if (this.y > canvas.height) {
          this.reset();
        }
        if (this.x > canvas.width) {
          this.x = 0;
        }
        if (this.x < 0) {
          this.x = canvas.width;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Create snowflakes
    const snowflakes = Array(150).fill().map(() => new Snowflake());

    // Animation loop with timestamp
    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      snowflakes.forEach(snowflake => {
        snowflake.move(deltaTime);
        snowflake.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation
    animate(0);

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 1000,
        background: 'transparent'
      }}
    />
  );
};

export default Snowfall; 