

const picArr = ['./wela1.jpg', './wela2.jpg', './wela3.jpg', './wela4.jpg', './wela5.jpg','./wela6.jpg','./wela7.jpg','./wela8.jpg','./wela9.jpg','./wela10.jpg',
            './wela11.jpg','./wela13.jpg','./wela14.jpg','./wela15.jpg','./wela16.jpg'       ]

function snowFlak(){
  
    let snowFlak=document.createElement('i');
    snowFlak.classList.add('fas')
    snowFlak.classList.add('fa-snowflake') 
    snowFlak.style.left=Math.random()* window.innerWidth+'px'
    snowFlak.style.animationDuration=Math.random()* 3 +6 +'s'
    snowFlak.style.opacity=Math.random()
    document.body.appendChild(snowFlak)

    setTimeout(() => {
        snowFlak.remove()
    }, 9000);
}
// function tree(){
  
//     let tree=document.createElement('i');
//     tree.classList.add('fas')
//     tree.classList.add('fa-tree') 
//     tree.style.left=Math.random()* window.innerWidth+'px'
//     tree.style.animationDuration=Math.random()* 3 +5 +'s'
//     tree.style.opacity=Math.random()
//     document.body.appendChild(tree)

//     setTimeout(() => {
//         snowFlak.remove()
//     }, 9000);
// }
function wela(){
    let wela = document.createElement('div');
    wela.classList.add('wela')
    wela.style.backgroundImage = `url('${picArr[Math.floor((Math.random() * picArr.length))]}')`

    wela.style.left = Math.random() * window.innerWidth + 'px'
    wela.style.animationDuration = Math.random() * 3 + 6 + 's'
    document.body.appendChild(wela)

    setTimeout(() => {
        wela.remove()
    }, 9000);
    
}
setInterval(wela,500);
setInterval(snowFlak,100);
// setInterval(tree,200);
