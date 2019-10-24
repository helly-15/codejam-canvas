var frame4x4 = [
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
];
let canvas4x4 = document.getElementById("canvas4x4");
let ctx4x4 = canvas4x4.getContext("2d");

function draw(frame, ctx){
    
    for (let i=0; i<frame.length; i++){
        for(let j=0; j<frame[i].length;j++){
            ctx.fillStyle ="#"+frame[i][j];
            ctx.fillRect(64*j,64*i,128, 128)
            
        }
    }
}
draw(frame4x4, ctx4x4)