var $btnShowHide =$('.btn-show-hide');
var $box =$('.box');

var $btnMove =$('.btn-move');
var $diamond =$('.diamond');

var $btnCollapseExpand =$('.btn-collapse-expand');
var $panel =$('.panel');

var $btnBounce =$('.btn-bounce');
var $circle =$('.circle');

var $btnAppend =$('.btn-append');
var $list =$('.list');


$btnShowHide.on('click', function()  {
    $box.toggleClass ('box');
});

$btnMove.on =$('click', function() {
    $diamond.toggleClass ('js-diamond');
});

$btnCollapseExpand.on('click', function() {
    $panel.toggleClass('js-panel');
});

$btnBounce.on('click', function() {
    $circle.addClass('js-circle-bounce')
});

$circle.on ('animationend', function(){
    $circle.removeClass('js-circle-bounce');
});

$btnAppend.on('click', function() {
    var $li =$('<li>New List Item</li>');
    $list.prepend($li);
});