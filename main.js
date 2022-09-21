var data = {
  facing: null,
  locationX: null,
  locationY: null,
  engineOn: false
};

var $car = document.querySelector('.car');

document.addEventListener('keydown', handleKeyDown);
var returnIntervalID = 0;
function handleKeyDown(event) {
  if (event.key === 'ArrowDown') {
    data.facing = 'South';
    $car.className = 'car south';
  } else if (event.key === 'ArrowUp') {
    data.facing = 'North';
    $car.className = 'car north';

  } else if (event.key === 'ArrowLeft') {
    data.facing = 'West';
    $car.className = 'car west';
  } else if (event.key === 'ArrowRight') {
    data.facing = 'East';
    $car.className = 'car east';
  } else if (event.key === ' ') {
    if (data.engineOn === false) {
      data.engineOn = true;
      returnIntervalID = setInterval(gas, 16);
      data.locationX = $car.x;
      data.locationY = $car.y;
    } else if (data.engineOn === true) {
      clearInterval(returnIntervalID);
      data.engineOn = false;
    }
  }
}
var offsetLeft = 0;
function gas() {
  data.locationX = $car.x;
  data.locationY = $car.y;
  $car.style.left = offsetLeft + 'px';

  offsetLeft += 12;
}
