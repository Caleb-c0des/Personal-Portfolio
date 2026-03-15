function Theme() {
  const html = document.documentElement;

  if (html.dataset.theme === "light") {
    html.dataset.theme = "dark";
  } else {
    html.dataset.theme = "light";
  }
}

const cursor =document .querySelector(".cursor");
document.addEventListener("mousemove",(e)=>
{
    cursor.style.left =e.clientX +"px";
    cursor.style.top =e.clientY + "px";
    cursor.style.opacity="1"
    
});
document.addEventListener("mouseleave", ()=> 
{
    cursor.style.opacity="0";
})
document.addEventListener("mouseenter", ()=> 
{
    circle.style.opacity="1";
})
const circle =document .querySelector(".circle");
let mouseX = 0, mouseY = 0;
let circleX = 0, circleY = 0;
document.addEventListener("mousemove",(e)=>
{
    mouseX = e.clientX;
    mouseY = e.clientY;
    circle.style.opacity="1"
    
});
document.addEventListener("mouseleave", ()=> 
{
    circle.style.opacity="1";
})
document.addEventListener("mouseenter", ()=> 
{
    cursor.style.opacity="1";
})
function animate() {
    circleX += (mouseX - circleX) * 0.1;
    circleY += (mouseY - circleY) * 0.1;
    circle.style.left = circleX + "px";
    circle.style.top = circleY + "px";
    requestAnimationFrame(animate);
}
animate();
