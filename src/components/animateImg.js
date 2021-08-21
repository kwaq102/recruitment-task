import $ from 'jquery';

$('img.image').on('click', function () {
  $('.image').toggleClass('active');
  console.log('jest ok')
});
