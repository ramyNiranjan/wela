



function snowFlak(){
    let wela=document.createElement('div');
    wela.classList.add('wela')
    wela.style.background="url('./wela2.jpg')"
    wela.style.height="50px"
    wela.style.width="50px"
    wela.style.backgroundPosition="top center"
    wela.style.backgroundSize="cover"
    wela.style.backgroundRepeat="no-repeat"
    wela.style.left=Math.random()* window.innerWidth+'px'
    wela.style.animationDuration=Math.random()* 3 +8 +'s'
    // wela.style.clipPath ='polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
    document.body.appendChild(wela)

    setTimeout(() => {
         wela.remove()
    }, 8300);
}

setInterval(snowFlak,100);
