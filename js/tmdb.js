const url = "https://api.themoviedb.org/3/movie/popular?api_key=" + config.api_key + '&language=pt&page=1';

var req = new XMLHttpRequest();

var jsonResponse;

var arrayImgs = [];


req.responseType = 'json';
req.open('GET', url, true);
req.onload = function () {
  jsonResponse = req.response.results;


  for (var i = 0; i < jsonResponse.length; i++) {

    $('.owl-carousel').trigger('add.owl.carousel', ['<div class="item"> <img src="https://image.tmdb.org/t/p/w500/'
      + jsonResponse[i].poster_path + '"></div>'])
      .trigger('refresh.owl.carousel');
  }

};
req.send(null);

