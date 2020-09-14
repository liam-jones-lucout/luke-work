   
 var shop = document.getElementById('shop');
 var chest = document.getElementById('chest');
    shop.onmouseover= function(){
     chest.play();
 }
    shop.onmouseout= function(){
    chest.pause();
} 

var challange = document.getElementById('challange');
var llama = document.getElementById('llama');
   challange.onmouseover= function(){
    llama.play();
}
   challange.onmouseout= function(){
   llama.pause();
   }

   var pass = document.getElementById('pass');
   var battle = document.getElementById('battle');
   pass.onmouseover= function(){
    battle.play();
}
   pass.onmouseout= function(){
   battle.pause();
   }

