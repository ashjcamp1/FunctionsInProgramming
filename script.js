var wrap = document.body.querySelector(".wrapper");
var dragondamage = document.body.querySelector(".dragondamage");
var fireButton = document.body.querySelector(".fire");
var iceButton = document.body.querySelector(".ice");
var poisonButton = document.body.querySelector(".poison");
var victory = document.body.querySelector(".victory");

var dmgdeal= 0;

function damageAttack (damage, attacktype){
  var damage=dmgdeal;
  if (attacktype==fireButton){
    dmgdeal = dmgdeal-1
    var damage= dmgdeal;
  }else if (attacktype==iceButton){
    dmgdeal = dmgdeal+1
    var damage= dmgdeal;
  }else{
    var damage = dmgdeal;
  }
  wrap.appendChild(dragondamage);
}

document.body.querySelector(".fire").addEventListener("click", function(){
  damageAttack(damage, fireButton);
  dmgdeal = dmgdeal+3;
  var damage= dmgdeal;
  dragondamage.innerHTML="Dragon Damage: " + damage
  if(damage>=10){
  victory.innerHTML="The User Wins!";
  }
})

document.body.querySelector(".ice").addEventListener("click", function(){
  damageAttack(damage, iceButton);
  dmgdeal = dmgdeal+1;
  var damage= dmgdeal;
  dragondamage.innerHTML="Dragon Damage: " + damage
  if(damage>=10){
  victory.innerHTML="The User Wins!";
  }  
})

document.body.querySelector(".poison").addEventListener("click", function(){
  damageAttack(damage, true);
  dmgdeal = dmgdeal+4;
  var damage= dmgdeal;
  dragondamage.innerHTML="Dragon Damage: " + damage
  if(damage>=10){
  victory.innerHTML="The User Wins!";
  }
})