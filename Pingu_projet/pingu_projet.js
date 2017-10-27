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
