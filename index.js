//const fetch = require("node-fetch");

var frame4x4 = [
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
];
let frame32x32;
let canvas4x4 = document.getElementById("canvas4x4");
let ctx4x4 = canvas4x4.getContext("2d");

let canvas32x32 = document.getElementById("canvas32x32");
let ctx32x32 = canvas32x32.getContext("2d");

function draw(frame, ctx, elemSize){
    
    for (let i=0; i<frame.length; i++){
        for(let j=0; j<frame[i].length;j++){
            ctx.fillStyle ="#"+frame[i][j];
            ctx.fillRect(elemSize*j, elemSize*i,elemSize, elemSize)
            
        }
    }
}
draw(frame4x4, ctx4x4, 128);

function convertArrayToHex(pixelArray) {
    let pixelArray1=[];
    for (let i=0; i<pixelArray.length; i++){      
          if(pixelArray[i]<10 ){
              pixelArray1.push( "0" + pixelArray[i].toString(16))
          }
          else pixelArray1.push(pixelArray[i].toString(16));
      
    }
    
    return pixelArray1[0]
     + pixelArray1[1]
     + pixelArray1[2]; 
};

    fetch ("https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json")
        .then(response => { 
            return response.json()
        })
        .then(json => {
            let hexColors= new Array(json.length);

            for (let i=0; i<json.length; i++){
                hexColors[i] = new Array(json[i].length)
                for (let j=0; j<(json[i].length); j++) {
                    hexColors[i][j]=(convertArrayToHex(json[i][j]));
                }         
            }
            console.log ( hexColors);
            frame32x32=hexColors;
            draw(frame32x32, ctx32x32, 16);
        }
        );
        var rsschoolImg = document.getElementById("rsschoolImg"),
        ctx       = rsschoolImg.getContext('2d'), // Контекст
        pic       = new Image();              // "Создаём" изображение
      pic.src    = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/image.png';  // Источник изображения
      pic.onload = function() {    // Событие onLoad, ждём момента пока загрузится изображение
        ctx.drawImage(pic, 0, 0, 512, 512);  // Рисуем изображение от точки с координатами 0, 0
      }
      let button4=document.getElementById ("switcher4");
      let button32=document.getElementById ("switcher32");
      let buttonimg=document.getElementById ("switcherImg");
      let canvasimg=document.getElementById ("rsschoolImg");
     button4.addEventListener ("click", () => { toggler(canvas4x4) })
     button32.addEventListener ("click", () => { toggler(canvas32x32) })
     buttonimg.addEventListener ("click", () => { toggler(canvasimg) })
      function toggler(canv){
        
        if (canv.style.display == "none") {
          canv.style.display = "block";
        } else {
          canv.style.display = "none";
        }
      }



