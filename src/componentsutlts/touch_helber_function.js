export function touchHelper(id,callback){

    const element = document.getElementById(id);
let initialX = null;
let initialY = null;

element.addEventListener('touchstart', handleTouchStart);
element.addEventListener('touchmove', handleTouchMove);

function handleTouchStart(event) {
  const firstTouch = event.touches[0];
  initialX = firstTouch.clientX;
  initialY = firstTouch.clientY;
}

let  position = ''
function handleTouchMove(event) {
  if (initialX === null || initialY === null) {
    return;
  }

  const currentX = event.touches[0].clientX;
  const currentY = event.touches[0].clientY;

  const diffX = initialX - currentX;
  const diffY = initialY - currentY;
  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0) {
        console.log('Swipe left');
      position='Swipe left'

      } else {
        console.log('Swipe right');
      position='Swipe right'

      }
  } else {
    if (diffY > 0) {
      console.log('Swipe up');
      position='Swipe up'
 
    } else {
      console.log('Swipe down');
      position='Swipe down'
 
    }
  }

  initialX = null;
  initialY = null;

  
}
console.log(position);
return callback.bind(position)
}