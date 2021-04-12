//  Movement Animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Items
const title = document.querySelector('.title');
const sneakers = document.querySelector('.sneakers img');
const purchases = document.querySelector('.purchases button');
const decription = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//  Movement animation effect
container.addEventListener("mousemove", (e)=> {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//  Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //  Pop Out
    title.style.transform = "translateZ(150px)";
    sneakers.style.transform = "translateZ(200px) rotateZ(-25deg)";
    decription.style.transform = "translateZ(125px)";
    purchases.style.transform = "translateZ(100px)";
    sizes.style.transform = "translateZ(75px)";
});

//  Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //  Pop back
    title.style.transform = "translateZ(0px)";
    sneakers.style.transform = "translateZ(0px) rotateZ(0deg)";
    decription.style.transform = "translateZ(0px)";
    purchases.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
});