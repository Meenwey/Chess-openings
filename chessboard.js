var hcord = ["A", "B", "C", "D", "E", "F", "G", "H"]; //horizontal coordinates
var vcord = ["8", "7", "6", "5", "4", "3", "2", "1"]; //vertical coordinates
var wK = ["B1","G1"]; //white knights location
var wB = ["C1","F1"]; //white bishops location
var wR = ["A1","H1"]; //white rooks location 
var bK = ["B8","G8"]; //black knights location
var bB = ["C8","F8"]; //black bishops location
var bR = ["A8","H8"]; //black rooks location 
//locations of pawns, Queens and Kings are generated below

let horcord = document.getElementById('horcord') //create horizontal coordinates
                                   
    for(i=1; i<=8; i++){
        let boxh = document.createElement('div');     
        horcord.appendChild(boxh);                                   
        boxh.appendChild(document.createTextNode(hcord[i-1]));
}

let vercord = document.getElementById('vercord'); //create vertical coordinates      
               
    for(i=1; i<=8; i++){
        let boxv = document.createElement('div');     
        vercord.appendChild(boxv);                                   
        boxv.appendChild(document.createTextNode(vcord[i-1]));
    }                     
  
let chessboard = document.getElementById('chessboard'); //generate chessboard
                   
    for(i=1; i<=8; i++){
        for(j=1; j<=8; j++){
            let box = document.createElement('div');  //create squares
            chessboard.appendChild(box);                                   
            box.setAttribute("id", hcord[j-1]+vcord[i-1]); //give ID for squares
            box.setAttribute("class", "box");                    
    
            if(i % 2 == 0){
                if( j % 2 == 0){
                    box.setAttribute("class", "blackbox");
                }
                else{
                    box.setAttribute("class", "whitebox");
                }
            }
    
            if(i % 2 != 0){
                if( j % 2 != 0){
                    box.setAttribute("class", "blackbox");
                }
                else{
                    box.setAttribute("class", "whitebox");
                }
                }
            }
    }   

for(i=1; i<=8; i++){
    var wPawn = document.getElementById(hcord[i-1]+"2");
    wPawn.appendChild(document.createTextNode("\u2659")); //generate white pawns
}

for(i=1; i<=8; i++){
    var bPawn = document.getElementById(hcord[i-1]+"7");
    bPawn.appendChild(document.createTextNode("\u265F")); //generate black pawns
}

for(i=0; i<=1; i++){
    var wKnight = document.getElementById(wK[i]);
    wKnight.appendChild(document.createTextNode("\u2658")); //generate white knights
}

for(i=0; i<=1; i++){
    var bKnight = document.getElementById(bK[i]);
    bKnight.appendChild(document.createTextNode("\u265E")); //generate black knights
}

for(i=0; i<=1; i++){
    var wBishop = document.getElementById(wB[i]);
    wBishop.appendChild(document.createTextNode("\u2657")); //generate white bishops
}

for(i=0; i<=1; i++){
    var bBishop = document.getElementById(bB[i]);
    bBishop.appendChild(document.createTextNode("\u265D")); //generate black bishops
}

for(i=0; i<=1; i++){
    var wRook = document.getElementById(wR[i]);
    wRook.appendChild(document.createTextNode("\u2656")); //generate white rooks
}

for(i=0; i<=1; i++){
    var bRook = document.getElementById(bR[i]);
    bRook.appendChild(document.createTextNode("\u265C")); //generate black rooks
}

var wQueen = document.getElementById("D1");
wQueen.appendChild(document.createTextNode("\u2655")); //generate white queen

var bQueen = document.getElementById("D8");
bQueen.appendChild(document.createTextNode("\u265B")); //generate black queen

var wKing = document.getElementById("E1");
wKing.appendChild(document.createTextNode("\u2655")); //generate white king

var bKing = document.getElementById("E8");
bKing.appendChild(document.createTextNode("\u265A")); //generate black king

function button1(){
    document.getElementById("A1").innerHTML = ""; 
    document.getElementById("D6").innerHTML = pawn2; 
}

let history =[]; //history of pieces' moves

//function for changing location of pieces
function movePiece(fromDivId, toDivId){
    var movingPiece = document.getElementById(fromDivId).innerHTML;
    document.getElementById(toDivId).innerHTML = movingPiece;
    document.getElementById(fromDivId).innerHTML = "";
    history.push({type: 'move', from: fromDivId, to: toDivId});
}

//function for undo last move
function undo(){
    const lastChange = history.pop();
    
    if (lastChange.type === 'move'){
        const from = document.getElementById(lastChange.from);
        const to = document.getElementById(lastChange.to);
        from.appendChild(to.lastChild);
    }
}