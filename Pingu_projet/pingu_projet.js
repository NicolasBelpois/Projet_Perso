var req = new XMLHttpRequest();
var text_descriptif = document.querySelectorAll('.photo');
var where_to_show = document.querySelector('.alltext');
var selecteP = "";
var main_select = document.querySelector(".main").offsetWidth;


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

if (main_select < 640) {
function change_to_mobile() {
  main_select.classList.remove(".main")
  main_select.classList.add(".hidden-desktop")
  }
}

function bigImg(x) {

    x.style.width = "105%";

}

function normalImg(x) {

    x.style.width = "100%";

}

function clic_image(x) {
  x.style.height = "125px";
  x.style.width = "125px";
}
