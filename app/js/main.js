var DASHBOARD = {};

var noWidth = '',
  fullWidth = 'content-container-full',
  halfWidth = 'content-container-half',
  quarterWidth = 'content-container-quarter';

(function(ns){

  ns.rotateLayouts = function ($sections, layouts) {
    for(var i = 0; i < $sections.length; i++) {
      var rand = Math.floor(Math.random() * layouts.length),
        layout = layouts[rand],
        $section = $($sections[i]);

      $section.removeClass(fullWidth).removeClass(halfWidth).removeClass(quarterWidth);
      $section.addClass(layout[i]);
    }
  };

}(DASHBOARD));

$(document).ready(function(){

  var $sections = $('section.content-container'),
    layouts = [
      [fullWidth, noWidth, noWidth, noWidth],
      [noWidth, fullWidth, noWidth, noWidth],
      [noWidth, noWidth, fullWidth, noWidth],
      [noWidth, noWidth, noWidth, fullWidth],

      [halfWidth, halfWidth, noWidth, noWidth],
      [noWidth, halfWidth, halfWidth, noWidth],
      [noWidth, noWidth, halfWidth, halfWidth],

      [halfWidth, quarterWidth, quarterWidth, noWidth],
      [halfWidth, quarterWidth, noWidth, quarterWidth],
      [halfWidth, noWidth, quarterWidth, quarterWidth],
      [noWidth, halfWidth, quarterWidth, quarterWidth],

      [quarterWidth, halfWidth, quarterWidth, noWidth],
      [quarterWidth, halfWidth, noWidth, quarterWidth],
      [quarterWidth, noWidth, halfWidth, quarterWidth],
      [noWidth, quarterWidth, halfWidth, quarterWidth],

      [quarterWidth, quarterWidth, halfWidth, noWidth],
      [quarterWidth, quarterWidth, noWidth, halfWidth],
      [quarterWidth, noWidth, quarterWidth, halfWidth],
      [ noWidth,quarterWidth, quarterWidth, halfWidth],

      [quarterWidth, quarterWidth, quarterWidth, quarterWidth]
    ];

  var intervalFunction = function () {
    DASHBOARD.rotateLayouts($sections, layouts);
  }
  setInterval(intervalFunction, 15000);

});