

const date = new Date
let h = date.getHours()
let m = date.getMinutes()
let s = date.getSeconds()
console.log(date)

/*transform time to deg*/
s = (s*6)
m = (m*6)
h>12 ? h = h-12 : h 
h = ((h*360)/12)+ (m/360 * 30)


/*count and inner the output*/
setInterval(function count(){
    s += 6
    m += 0.06
    h += 0.006
    document.getElementById('hour').style.transform = 'rotate(' + h + 'deg)';
    document.getElementById('minut').style.transform = 'rotate(' + m + 'deg)';
    document.getElementById('second').style.transform = 'rotate(' + s + 'deg)';
},1000)
