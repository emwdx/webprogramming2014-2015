   if(image !=null){  
    ctx.drawImage(image,0,0,canvas.width,canvas.height);    
    }
    ctx.font = '30pt Impact';
    ctx.textAlign = 'center';
    ctx.strokeStyle = 'black';
    ctx.linewidth = 3;
    ctx.fillStyle = 'white';
        
    if(topLine!=null){
     ctx.fillText(topLine,canvas.width/2,40);
     ctx.strokeText(topLine,canvas.width/2,40);
    }
    
     if(bottomLine!=null){
     ctx.fillText(bottomLine,canvas.width/2,450);
     ctx.strokeText(bottomLine,canvas.width/2,450);
    } 