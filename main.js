var directionData = {
  facing: null
};

var $car = document.querySelector('.car');

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  if (event.key === 'ArrowDown') {
    directionData.facing = 'South';
    $car.className = 'car south';
  } else if (event.key === 'ArrowUp') {
    directionData.facing = 'North';
    $car.className = 'car north';

  } else if (event.key === 'ArrowLeft') {
    directionData.facing = 'West';
    $car.className = 'car west';
  } else if (event.key === 'ArrowRight') {
    directionData.facing = 'East';
    $car.className = 'car east';
  }
}
