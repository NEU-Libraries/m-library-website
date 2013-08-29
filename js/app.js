function searchPrimo() {
  if(document.getElementById("primoQueryTemp").value.length > 0){
    document.getElementById("primoQuery").value = "any,contains," + document.getElementById("primoQueryTemp").value;
    document.forms["searchForm"].submit();
  }
  else{
    window.stop();
  }
}
$(function() {
  $('[data-toggle="nuCollapse"]').click(function(){
    var t = $(this).data('target');
    $(t).toggle(500);
  });
});
