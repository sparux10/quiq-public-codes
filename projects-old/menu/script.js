var t1 = document.getElementById('t1')
var t2 = document.getElementById('t2')
var t3 = document.getElementById('t3')
var t4 = document.getElementById('t4')
var list = [t1, t2, t3, t4]

//7al tkhrbi9a ta3 setimout hua mna3 button mn lkhdma l 0.3s 

var nv = 0

function plus() {
    document.getElementById('plus').disabled = true
    nv = nv + 1
    if (nv < 4) {
        let selectedP = list[nv]
        let selectedN = list[nv - 1]
        selectedP.style.width = '70%'
        selectedN.style.width = '13%'

        setTimeout(function () {
            selectedP.style.width = '61%'
        }, 300)
        let childrenP = selectedP.querySelector('p')
        let childrenN = selectedN.querySelector('p')
        childrenP.style.transform = 'rotate(0)'
        childrenN.style.transform = 'rotate(90deg)'
    } if (nv === 4) {
        nv = 0
        let selectedP = list[nv]
        selectedP.style.width = '70%'
        selectedP.querySelector('p').style.transform = 'rotate(0)'
        setTimeout(function () {
            selectedP.style.width = '61%'
        }, 300)
        list[3].style.width = '13%'
        list[3].querySelector('p').style.transform = 'rotate(90deg)'
    }
    setTimeout(() => {
        document.getElementById('plus').disabled = false
    }, 400)
}
function moins() {
    document.getElementById('moin').disabled = true
    setTimeout(() => {
        document.getElementById('moin').disabled = false
    }, 400)
    nv = nv - 1
    if (nv === -1) {
        nv = 3
        let selectedP = list[nv]
        selectedP.style.width = '70%'
        list[nv].querySelector('p').style.transform = 'rotate(0)'
        setTimeout(function () {
            selectedP.style.width = '61%'
        }, 300)
        list[0].style.width = '13%'
        list[0].querySelector('p').style.transform = 'rotate(90deg)'
    }
    if (nv < 4) {
        let selectedP = list[nv]
        let selectedN = list[nv + 1]
        selectedP.style.width = '70%'
        selectedN.style.width = '13%'
        setTimeout(function () {
            selectedP.style.width = '61%'
        }, 300)
        let childrenP = selectedP.querySelector('p')
        let childrenN = selectedN.querySelector('p')
        childrenP.style.transform = 'rotate(0)'
        childrenN.style.transform = 'rotate(90deg)'
    }
    

}