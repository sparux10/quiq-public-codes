class Player{
    constructor(){
        this.name = ""
        this.symbole = ""
    }
    set_Name(name){
        this.name = name
    }
}


class Board{
    
    constructor(board){
        this.board = board
    }

    build_board(){
        for(let i=0;i<9;i++){
            let sq = `<div class="sq" value="${i}"></div>`
            board.innerHTML += sq
        }
    }
    update(){
        this.board = board
        var all = document.querySelectorAll(".sq")
        let val = true
        all.forEach((item)=>item.addEventListener("click",(e)=>{
            val ? e.target.style =" background-image: url(./o.png)" : e.target.style.backgroundColor = "green"
            val = !val
            console.log(e.target)
        }))
    }
    reset(){
        this.board.innerHTML =""
    }
}
class Game{
    constructor(){
        this.players = [new Player(),new Player()]
    }
    setup(data){
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].set_Name(data[i].name);
        }
        
    }
    start(){
        const boardElement = document.getElementById("board");
        const board = new Board(boardElement);
        board.build_board();
        board.update();
    }

}

function createPlayer() {
    const player1Name = document.getElementById("name1").value;
    const player2Name = document.getElementById("name2").value;


    return [
        { name: player1Name },
        { name: player2Name }
    ];
}

function startGame() {
    const game = new Game();
    const playerData = createPlayer();
    game.setup(playerData);
    game.start();
}

document.addEventListener("DOMContentLoaded", () => {
    const boardElement = document.getElementById("board");
    boardElement.innerHTML = "";
});