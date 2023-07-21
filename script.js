const container=document.querySelector('.container');
const person=document.querySelectorAll('.person');
document.body.addEventListener('mouseover',(e)=>{
    var x=((window.innerWidth / 3) - e.pageX) / 20;
    var y=((window.innerHeight / 3) - e.pageY) /20;
    container.style.transform = `rotateX(${-y*2}deg) rotateY(${-x*2}deg) translateY(${x*2}px) translateX(${y*2}px)`;
    person.forEach(person =>{
        person.style.transform=`translateY(${y*2}px) translateX(${x*2}px)`
    })
})
