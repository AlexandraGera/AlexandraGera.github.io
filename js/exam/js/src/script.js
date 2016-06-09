$(function() {
$('.jcarousel').jcarousel();
$('.jcarousel').jcarouselAutoscroll({
  interval: 3000,
  target: '+=1',
  autostart: true
});

$('.jcarousel-prev').click(function(event) {
  event.preventDefault();
  var jcarousel= $(this).attr('href');
  $(jcarousel).jcarousel('scroll', '-=1');
});
$('.jcarousel-next').click(function(event) {
  event.preventDefault();
  var jcarousel= $(this).attr('href');
  $(jcarousel).jcarousel('scroll', '+=1');
});

//Form
$('form').on('submit', function() {
  var input = $('.search_input').val();
  $('.holiday-ideas_container').hide();
  $.ajax({
    url: "https://pixabay.com/api/?key=2363371-b6bbc35258ec148f978e7d437&per_page=7&q="+ input +"&image_type=photo",
    success: function(data, textStatus) {
      console.log(data);
      var div = document.createElement('div');
      div.classList.add('result-search_container');
      div.classList.add('grid');
      $.each(data.hits, function(i) {
        console.log(data.hits);
        var divItem = document.createElement('div');
        divItem.classList.add('grid-item');
        divItem.classList.add('result-search_item'+ i);
        divItem.innerHTML ='<img class="result-search_image' + i + '" src="'+data.hits[i].webformatURL+'">';
        div.appendChild(divItem);                    
      });
      $('.holiday-ideas_result-search').html(div);
    },
  });    
  return false;  
}); 

$('.grid').isotope({
    itemSelector: '.grid-item',
     layoutMode: 'fitRows'
  });


});