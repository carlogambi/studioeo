
function startP5Program()
{
     var sketch = function( p ) {
   
        var W; var H; var minColor; var count; var MAX_COUNT; var m, M;
        var fulcro = [];
    
        p.varInit = function()
        {
            
            W = (window.innerWidth/100)*53;     //Da cambiare secondo la dimensione del canvas in uso su .EO
            H = 540;     //Come sopra
        
            minColor = 50;    //Filtro di taglio per colore - Base di partenza 50 a tutti
            
            count = 0;
            MAX_COUNT = 0;
            
            m = 5;        //Se vuoi alzare o abbassare il numero minimo e massimo di linee, il range
            M = 200;
            
            //p.fulcro = p.push(p.random(0, p.W));
            //p.fulcro = p.push(p.random(0, p.H));
            
        };
        
        p.newFulcro = function()
        {
            count = 0;
            fulcro[0] = p.random(0, W);
            fulcro[1] = p.random(0, H);
            MAX_COUNT = p.random(m, M);
        };
        
        p.setup = function()
        {
            p.varInit();
            p.createCanvas(W, H).parent('TARGET_ID');
            
            //p.colorMode(RGB, 255);
            p.background(150);
            p.frameRate(30);
            p.newFulcro();
            
        };
        
        p.draw = function()
        {
            if(count >= MAX_COUNT){ p.newFulcro(); }
            count++;
            p.stroke(0);
            p.stroke(p.map(p.dist(fulcro[0], fulcro[1], p.mouseX, p.mouseY), 0, p.sqrt( p.pow(W,2) + p.pow( H,2))-p.dist(fulcro[0], fulcro[1], p.mouseX, p.mouseY), minColor, 255), p.map(p.dist(fulcro[0],0, p.mouseX,0), 0, W-p.dist(fulcro[0],0, p.mouseX,0), minColor,255), p.map(p.dist(0, fulcro[1],0,p.mouseY), 0, H-p.dist(0, fulcro[1],0,p.mouseY), minColor,255));
            p.line(fulcro[0], fulcro[1], p.mouseX, p.mouseY);
       
        };
        
        p.touchStarted = function()
        {
            p.background(255);
        };
     };
     var myp5 = new p5(sketch);

}
