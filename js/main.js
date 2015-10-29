'use strict';

var updateJustifiedGallery = function() {
  console.log('function called!');
  $("#mygallery").justifiedGallery({
    rowHeight: 300,
    // maxRowHeight: 210,
    lastRow: "justify",
    margins: 30,
    refreshTime: 300,
    captionSettings: {
      animationDuration: 500,
      visibleOpacity: .8,
      nonVisibleOpacity: 0.0
    }
  });
};

updateJustifiedGallery();

$(document).ready(function() {
  $(".fancybox").fancybox({
    padding : 3,
    helpers : {
      title : null,
      overlay : {
        css : {
          'background' : 'rgba(0, 0, 0, 0.90)'
        }
      }
    }
  });
});

$('.mobile-nav-button').click(function(e) {
  e.preventDefault();
  console.log('you clicked it!');
  if ($(this).hasClass("open") ) {
    console.log('has the class OPEN');
    $('.nav-container').removeClass('open');
    $('.mobile-nav-button').removeClass('open');
  }
  else {
    console.log('does not have the class OPEN');
    $('.nav-container').addClass('open');
    $('.mobile-nav-button').addClass('open');
  }

});