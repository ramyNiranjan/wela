

const picArr = ['./wela1.jpg', './wela2.jpg', './wela3.jpg', './wela4.jpg', './wela5.jpg',]

function snowFlak(){
    let wela=document.createElement('div');
    let snowFlak=document.createElement('i');
    wela.classList.add('wela')
    snowFlak.classList.add('fas')
    snowFlak.classList.add('fa-snowflake')
    wela.style.backgroundImage = `url('${picArr[Math.floor((Math.random() * picArr.length))]}')` 
  
    wela.style.left=Math.random()* window.innerWidth+'px'
    snowFlak.style.left=Math.random()* window.innerWidth+'px'
    wela.style.animationDuration=Math.random()* 3 +6 +'s'
    snowFlak.style.animationDuration=Math.random()* 3 +6 +'s'
    snowFlak.style.opacity=Math.random()
   
  
    document.body.appendChild(wela)
    document.body.appendChild(snowFlak)

    setTimeout(() => {
         wela.remove()
    }, 9000);
}

setInterval(snowFlak,100);
