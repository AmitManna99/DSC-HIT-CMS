document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, { edge: 'right' });
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {});
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems, {});
});

/*
$(document).ready(function(){
  $('.datepicker').datepicker();
});*/

//var instance = M.Datepicker.getInstance(elem);