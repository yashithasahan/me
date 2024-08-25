import React, { useEffect, useRef } from "react";

interface FireflyProps {
  count?: number;
}

const Firefly: React.FC<FireflyProps> = ({ count = 8 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    if (!canvas || !ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    class FireflyParticle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      brightness: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 2;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.brightness = 0;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        this.brightness = Math.sin(Date.now() * 0.005) * 0.5 + 0.6;
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(134, 239, 172, ${this.brightness})`;
        context.shadowColor = "rgba(134, 239, 172, 1)";
        context.shadowBlur = 15;
        context.fill();
        context.closePath();
      }
    }

    const fireflies: FireflyParticle[] = Array.from(
      { length: count },
      () => new FireflyParticle()
    );

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      fireflies.forEach((firefly) => {
        firefly.update();
        firefly.draw(ctx);
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-96 h-48 pointer-events-none"
    />
  );
};

export default Firefly;
