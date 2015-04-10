'use strict';

$(document).ready(init);

var current = 'ruby';
var $source;

function init(){
  initBoard();
  switchUser();

  $('#board').on('click', '.active', select);
  $('#board').on('click', '.empty', move);
}

function move(){
  if(!$source){
    return;
  }

  var $target = $(this);
  var isKing = $source.is('.king');

  var src = {};
  var tgt = {};

  src.x = $source.data('x') * 1;
  src.y = $source.data('y') * 1;
  tgt.x = $target.data('x') * 1;
  tgt.y = $target.data('y') * 1;

  console.log(src, tgt);
}

function select(){
  $source = $(this);
  $('.valid').removeClass('selected');
  $source.addClass('selected');
}

function initBoard(){
  $('#board tr:lt(3) .valid').addClass('ruby player');
  $('#board tr:gt(4) .valid').addClass('js player');
  $('td.valid:not(.player').addClass('empty');
}

function switchUser(){
  current = (current === 'js') ? 'ruby' : 'js';
  $('.valid').removeClass('active selected');
  $('.' + current).addClass('active');
}
