
const pupils = document.querySelectorAll(".pupil");

document.addEventListener("mousemove", (event) => {

  let mouseX = event.clientX;
  let mouseY = event.clientY;


  for (let i = 0; i < pupils.length; i++) {
    let eye = pupils[i].parentElement.getBoundingClientRect();

 
    let eyeCenterX = eye.left + eye.width / 2;
    let eyeCenterY = eye.top + eye.height / 2;

  
    let angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);


    let pupilX = Math.cos(angle) * 20; 
    let pupilY = Math.sin(angle) * 20;

    pupils[i].style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  }
});