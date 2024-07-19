class Curve {
    constructor(y,canvas, color) {
        //vars
        this.y = y
        this.color = color
        this.canvas = canvas
        var grads = y.length
        const context = this.canvas.getContext('2d');

        // x aXE
        var grad = canvas.width / grads
        const x = []
        for (let i = 0; i <= grads; i++) {
            x.push(grad * i)
        }

        //draw grids
        x.forEach((grd , i) => {
            //x
            context.moveTo(grd,0);
            context.lineTo(grd, 4);
            //y
            context.moveTo(0,grd);
            context.lineTo(4, grd);
        });
        context.fillText(0, 4, 10, 10);
        

        //draw line
        context.moveTo(0, 0);
        x.forEach((pos, i) => {
            context.lineTo(pos, (y[i]) * grad);
        });

        //color
        context.strokeStyle = this.color;
        context.stroke();
    }
}



const canvas = document.getElementById('canvas');
function def() {
    let list = []
    for (let i = 0; i <= 10; i++) {
        let num = i / 2
        list.push(num)
    }
    return list
}
const y = def()

const cu = new Curve(y, canvas, 'red')

