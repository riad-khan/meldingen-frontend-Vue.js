//side menu
function openNav() {
  document.getElementById("mobileSidenav").style.right = "0";
  var element = document.getElementById("body-class");
  element.classList.add("sidenav-open");
}

function closeNav() {
  document.getElementById("mobileSidenav").style.right = "-88%";
  var element = document.getElementById("body-class");
  setTimeout(function() {
    element.classList.remove("sidenav-open"); 
  },500);
}

// Date input/ INCLUDE JQUERY & JQUERY UI 1.12.1
$( function() {
  if($( "#datepicker" ).length>0){
    $( "#datepicker" ).datepicker({
      dateFormat: "dd-mm-yy"
      ,	duration: "fast",
      minDate: 0,
      defaultDate: new Date(),
      }).datepicker('widget').position({
        my: 'left bottom',
        at: 'left top'
    });
  }


} );

$(document).click(function() {
    var container = $("#mobileSidenav");
    var button = $("button.openNav.box-shadow");
    if (!container.is(event.target) && !container.has(event.target).length && !button.is(event.target) && !button.has(event.target).length) {
      closeNav();
    }
});

//Custom Select
if($(".custom-select").length>0){
  $(".custom-select").each(function() {
    var classes = $(this).attr("class"),
        id      = $(this).attr("id"),
        name    = $(this).attr("name");
    var template =  '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function() {
          template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
    template += '</div></div>';
    
    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
  });
}


$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});

$(".custom-select-trigger").on("click", function() {
  
  $('html').one('click',function() {
    $(".custom-select").removeClass("opened");
  });

  $(".custom-select").removeClass("opened");

  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});

$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});


$(document).ready(function(){

  // on/off switch button
  $('.switcher').change(function(){
    if($(this).is(":checked")) {
        $('#body-class').addClass("dark");
    } else {
        $('#body-class').removeClass("dark");
    }
  });

  // news-list-hide/show for mobile


  // $("#news-btn").click(function(){
  //   $("#news-list").slideToggle(500);
  //   $(this).toggleClass("angle-up");
  //   $("#widget_title").toggleClass("slideOpen",500);
  // });
  // search form hide/show for mobile
  $("#form-btn").click(function(){
    $("#search-from").slideToggle(500);
  });

});