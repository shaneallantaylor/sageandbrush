'use strict';

var updateJustifiedGallery = function() {
  console.log('function called!');
  $("#mygallery").justifiedGallery({
    rowHeight: 300,
    // maxRowHeight: 210,
    lastRow: "nojustify",
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