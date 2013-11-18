function searchPrimo() {
    document.getElementById("primoQueryTemp").value.length > 0 ? (document.getElementById("primoQuery").value = "any,contains," + document.getElementById("primoQueryTemp").value, 
    document.forms.searchForm.submit()) : window.stop();
}

$(function() {
    $('[data-toggle="nuCollapse"]').click(function() {
        var a = $(this).data("target");
        $(a).toggle(500);
    });
});