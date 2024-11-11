import React, { useEffect } from 'react';

function CanvasAnimation() {
  useEffect(() => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Drawing code
    ctx.fillStyle = 'blue';
    ctx.fillRect(30, 30, 70, 70);

    ctx.beginPath();
    ctx.arc(100, 100, 40, 0, 2 * Math.PI);
    ctx.fillStyle = 'green';
    ctx.fill();
  }, []);

  return <canvas id="myCanvas" width="200" height="200"></canvas>;
}

export default CanvasAnimation;