let horcord = document.getElementById('horcord') // create horizontal coordinates
               
var hcord = ["A", "B", "C", "D", "E", "F", "G", "H",]
var vcord = ["1", "2", "3", "4", "5", "6", "7", "8"]

var whitePawn = ['A']
               
               
    for(i=1; i<=8; i++)
        {
            let boxh = document.createElement('div');     
            horcord.appendChild(boxh);                                   
            boxh.appendChild(document.createTextNode(hcord[i-1]))
        }

let vercord = document.getElementById('vercord') // create vertical coordinates      
               
    for(i=1; i<=8; i++)
        {
            let boxv = document.createElement('div');     
            vercord.appendChild(boxv);                                   
            boxv.appendChild(document.createTextNode(vcord[i-1]))
        }                     
  

let chessboard = document.getElementById('chessboard')
                   
    for(i=1; i<=8; i++){
            for(j=1; j<=8; j++)
                {
                    let box = document.createElement('div');  //create squares
                    chessboard.appendChild(box);                                   
                    box.setAttribute("id", hcord[j-1]+vcord[i-1]); //give ID for squares
                    box.setAttribute("class", "box");                    
    
                if(i % 2 == 0){
                    if( j % 2 == 0){
                        box.setAttribute("class", "blackbox")
                    }
                    else{
                        box.setAttribute("class", "whitebox") 
                    }
                }
    
                if(i % 2 != 0){
                    if( j % 2 != 0){
                        box.setAttribute("class", "blackbox")
                    }
                    else{
                        box.setAttribute("class", "whitebox") 
                    }
                }
                }
    }   


const pawn = document.getElementById("D4");
pawn.appendChild(document.createTextNode("\u2654"));

const pawn1 = document.getElementById("D6");
pawn1.appendChild(document.createTextNode("\u265A"));

const pawn2 = "\u2654";

document.getElementById("E6").innerHTML = "\u2658";
document.getElementById("A1").innerHTML = pawn2;

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
const lastChange = history.pop()
if (lastChange.type === 'move'){
    const from = document.getElementById(lastChange.from);
    const to = document.getElementById(lastChange.to);
    from.appendChild(to.lastChild)
}
}