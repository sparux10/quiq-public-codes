var store = document.getElementById('area')
var store2 = document.getElementById('area2')

function apendVal(value) {
    store.value += value
}

function calculate(){
    let calc = eval(store.value)
    store2.value = calc
    console.log(calc)
}
function Delet(){
    let value = store.value.slice(0, -1);
    store.value = value
}
function DeletAll(){
    store.value = ''
    store2.value = ''
}