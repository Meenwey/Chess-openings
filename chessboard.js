let horcord = document.getElementById('horcord') // create horizontal coordinates
               
var hcord = ["A", "B", "C", "D", "E", "F", "G", "H",]
var vcord = ["1", "2", "3", "4", "5", "6", "7", "8"]
               
               
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
                    box.setAttribute("id", hcord[i-1]+vcord[j-1]); //give ID for squares
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
