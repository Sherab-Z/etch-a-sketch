function createNewCanvas(sideSquaresNum = 16) {
  const canvas = document.getElementById('canvas');

  for (let i = 0; i < sideSquaresNum; i++) {
    const gs = document.createElement('div');
    gs.className = 'gs';
    gs.style.width = `calc(100/${sideSquaresNum} * 100%)`;
    gs.style.height = `calc(100% / ${sideSquaresNum})`;
    canvas.appendChild(gs);
  }
}

createNewCanvas();