// $ curl -u saNoWSwPGchzFyxreZlFPpaws:x https://mmjmenu.com/api/v1/menu_items

$.ajax({
    // url: "https://cors-anywhere.herokuapp.com/https://mmjmenu.com/api/v1/menu_items",
    url: "https://mmjmenu.com/api/v1/menu_items/",
    headers: {"Authorization": "Basic " + btoa("api_token:saNoWSwPGchzFyxreZlFPpaws")},
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });