$(document).ready(function(){
  $('a[class *= -btn]').hide();
  
  ans_btn_html = '<a class = "btn-ans"><span class="label label-success no-print">&lt;ANS/&gt;</span></a>';
  showAns_btn = '<li><a class="showAns-btn">Show Answers</a></li>';
  hideAns_btn = '<li><a class="hideAns-btn" style="display:none;">Hide Answers</a></li>';
  
  // Adding Extra Menus in Navigation
  
  // Adding button on before each answer:::
  $(".ans").before(ans_btn_html);
  $('.btn-ans').each(function(){
    $(this).next('.ans').andSelf().wrapAll('<div class="wrap-ans"/>');
  });
  $('.btn-ans').click(function(){
    $(this).siblings('.ans').toggle(400);
  });
  
if ($(".ans").length > 0){
    $('.navbar-right').append(showAns_btn, hideAns_btn);
    $('.showAns-btn').show();
    $('.showAns-btn').click(function(){
      $('.btn-ans').hide(400);
      $('.ans').show(400);
      $('.hideAns-btn').show();
      $(this).hide();
      $('.hideAns-btn').click(function(){
        $('.btn-ans').show(400);
        $('.ans').hide(400);
        $('.showAns-btn').show();
        $(this).hide();
      });
    });
  }

function subMenu(){
  $('.nav li.dropdown ul a').slice(1).hide();
  $('.dropdown-header').click(function(){
  $(this).nextUntil('.dropdown-header').addBack().children('a').toggle(400);
  });
  $(".dropdown-header").click(function(e){
    e.stopPropagation();
  });
}
subMenu();

});

