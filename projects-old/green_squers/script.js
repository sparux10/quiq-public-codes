let wid = innerWidth/30
let hi = innerHeight/30
for (let i = 0; i < wid * hi; i++) {
    var div = document.createElement('div')
    document.body.append(div)
}

var divs = document.querySelectorAll('div')
/* divs.forEach((items) => items.addEventListener('mouseover', () => {
    items.style.backgroundColor = 'rgb(82, 175, 0)'
    setTimeout(() => { items.style.backgroundColor = 'rgb(82, 175, 0, 0.8)' }, 100)
    setTimeout(() => { items.style.backgroundColor = 'rgb(82, 175, 0, 0.6)' }, 150)
    setTimeout(() => { items.style.backgroundColor = 'rgb(82, 175, 0, 0.4)' }, 200)
    setTimeout(() => { items.style.backgroundColor = 'rgb(82, 175, 0, 0.2' }, 250)
    setTimeout(() => { items.style.backgroundColor = 'transparent' }, 300)
})) */


const list = [0,1,2]
for (let i = 0; i < 3;i++) {
    if(i = 0 ) divs[list[i]].style.backgroundColor = 'red' ;

    list[i] += 1;
    divs[list[i]].style.backgroundColor = 'red';

    
    
}