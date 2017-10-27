var req = new XMLHttpRequest();
var text_descriptif = document.querySelectorAll('.photo');
var where_to_show = document.querySelector('.alltext');
var selecteP = "";
var main_select = document.querySelector(".main").offsetWidth;
var launch = document.querySelector('#fat-blue');
var reponse1 = "VRAI";
var reponse2 = "FAUX";


req.open('get', 'data.json', true);
req.send();
req.onload = function (event) {
  var data = req.responseText;
  data = JSON.parse(data);
  text_descriptif.forEach(function(p){
    p.addEventListener('click', function(){
      selecteP = data.filter(function(object){
        return object.id == p.id;
      })
      where_to_show.innerHTML = selecteP[0].descriptif;
    })

  })
}

launch.addEventListener('click', function(){
  alert("Bienvenue")
  alert("Ce jeu est un vrai ou faux, ce qui signifie que seul les réponses Vrai ou Faux sont accepter.")
  confirm("Si tu est prêt à jouer, click sur le boutton Ok.")
  Guessrep();
})
function Guessrep() {
  var rep = prompt("La masse du Manchot Empereure ce situe entre 20Kg et 40kg.")
  rep = rep.toUpperCase();
  if (rep === reponse1) {
    alert("Bravo tu est très intlligent ! Tu doit surement être un expert en Pingouin renomée dans le monde entier !!!!")

  }else if (rep === reponse2) {
    alert("Hahahahahahaha")
    alert("hahaha hahaha")
    alert("haaaaaaa..... tu est trop nul !")

  }else if (rep != reponse1 && reponse2) {
    alert("Ont a dit Vrai !! ou FAUX !!")
  }
}
