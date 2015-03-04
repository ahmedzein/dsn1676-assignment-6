var $btnShowHide =$('.btn-show-hide');
var $box =$('.box');

var $btnMove =$('.btn-move');
var $diamond =$('.diamond');

var $btnCollapseExpand =$('.btn-collapse-expand');
var $panel =$('.panel');

$btnShowHide.on('click', function()  {
    $box.toggleClass ('box');
});

$btnMove =$('click', function() {
    $diamond.remove ('diamond');
});

$btnCollapseExpand.on('click', function() {
    $panel.toggleClass('panel');
});